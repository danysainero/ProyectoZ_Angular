import { Component, OnInit, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { FaceRecognitionService } from '../../service/face-recognition.service'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-verifypage',
  templateUrl: './verifypage.component.html',
  styleUrls: ['./verifypage.component.scss'],

})
export class VerifypageComponent implements OnInit {

  constructor(private faceRecognitionService: FaceRecognitionService, private http: HttpClient) { }

  @ViewChild('camera') camera: ElementRef;
  @ViewChild('cameraCanvas') cameraCanvas: ElementRef;

  isCameraOpen = false;
  photoTaken = true; // show/hide video
  snapshotButtonDisabled = true;
  retryButtonDisabled = true;
  videoTrack: MediaStreamTrack;
  selectedFile;
  fd = new FormData();
  deviceMobile = false;

  ngOnInit() {
    this.deviceMobile = this.detectmob();
    
   }

  onOpenCamera() {
    const constraints = {
      video: true,
      facingMode: 'environment',
      audio: false
    };

    this.snapshotButtonDisabled = false;
    this.isCameraOpen = !this.isCameraOpen;

    if (this.isCameraOpen) {
      console.log('iniciando camara');
      navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
        this.camera.nativeElement.srcObject = mediaStream;
        this.videoTrack = mediaStream.getVideoTracks()[0];
        this.camera.nativeElement.play().then();
      });
    } else {
      this.onCloseCamera()
    }
  }

  takePhoto() {

    console.log('tomando foto');
    //disable take photo button
    this.snapshotButtonDisabled = !this.snapshotButtonDisabled;
    //show canvas display
    this.photoTaken = false;
    // enable retry button
    this.retryButtonDisabled = false;

    const settings = this.videoTrack.getSettings();
    let x = document.documentElement.clientWidth;
    let y = document.documentElement.clientWidth * (settings.height / settings.width);
    let posx = 0;
    let posy = 0;
    //set W/H of canvas
    this.cameraCanvas.nativeElement.width = document.documentElement.clientWidth;
    this.cameraCanvas.nativeElement.height = y;

    this.cameraCanvas.nativeElement.getContext('2d')
      .drawImage(this.camera.nativeElement, 0, 0, settings.width, settings.height, posx, posy, x, y);

    //Stop the streaming    
    this.videoTrack.stop();
  }

  onCloseCamera() {
    console.log('cerrando camara');
    this.snapshotButtonDisabled = true;
    this.retryButtonDisabled = true;
    this.isCameraOpen = false;
    this.photoTaken = true;

    //Stop the streaming
    if (this.videoTrack) {
      this.videoTrack.stop();
    }
    if (this.camera !== undefined) {
      this.camera.nativeElement.srcObject = null;
    }
  }

  retry() {
    console.log('reiniciando camara');
    this.photoTaken = true;
    this.isCameraOpen = false;
    this.onOpenCamera();
  }

   check() {

    const dataURL = this.cameraCanvas.nativeElement.toDataURL('image/png');
    const myParams = 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup';
   let verifyJson = this.faceRecognitionService.verify(dataURL, myParams).subscribe((data)=>{
    console.log(data); 
     return data;
   });
    
  }




  createFormData(inputfiles) {
    this.fd = new FormData();
    this.selectedFile = <File>inputfiles.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
    let myParams = `age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup`;

    const uriBase = 'https://westeurope.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=' + myParams;
    const subscriptionKey = '235099898026480caeb2ad504ed507e9';
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/octet-stream').set('Ocp-Apim-Subscription-Key', subscriptionKey);
    let params = new HttpParams();
    params.set('returnFaceId', 'true').set('returnFaceLandmarks', 'false');

     this.http.post(uriBase, this.selectedFile, { params, headers }).subscribe(data =>{
      console.log(data);
      
    });

    /* let verifyJson = this.faceRecognitionService.verify(this.fd, myParams).subscribe((data)=>{
       return data;
     });
    
    console.log(verifyJson); */
  
  };


   detectmob() { 
    if( navigator.userAgent.match(/Android/i)    
    || navigator.userAgent.match(/iPhone/i)    
    ){
       return true;
     }
    else {
       return false;
     }
   }
 

}

