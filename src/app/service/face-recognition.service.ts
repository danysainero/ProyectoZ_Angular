
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaceRecognitionService {

  constructor(private http: HttpClient) { }


  verify(dataURL, myParams) {
      const uriBase = `${environment.faceURL}${myParams}`;
    const subscriptionKey = `${environment.faceAPI}`;
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/octet-stream').set('Ocp-Apim-Subscription-Key', subscriptionKey);
    let params = new HttpParams();
    params.set('returnFaceId', 'true');
    const blob = createBlob(dataURL);
    return this.http.post(uriBase, blob, { params, headers });

    
    function createBlob(dataURL) {
      var BASE64_MARKER = ';base64,';
      if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
      }
      var parts = dataURL.split(BASE64_MARKER);
      var contentType = parts[0].split(':')[1];
      var raw = window.atob(parts[1]);
      var rawLength = raw.length;

      var uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }

      return new Blob([uInt8Array], { type: contentType });
    }
   
    function goTo() {
     /*  setTimeout(function () { window.location.replace('timeline') }, 3000); *///borrar
    } 

  }


}
