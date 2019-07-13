import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/service/timeline.service';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  newPostForm;
  selectedFile;
  photoRequired; //mete clase css a botón de camara cuando no se ha elegido una foto
  fd = new FormData();

  constructor(private timelineService: TimelineService, private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.newPostForm = this.fb.group({
      text: ['', Validators.compose([Validators.required])],
      file: ['']
    });
  }

  newPostOpen() {
    this.isOpen = !this.isOpen;
  };

  async onSubmit(e, newPostForm) {

    if (newPostForm.value['file'] && newPostForm.value['file'] !== '') {
      await this.httpClient.post(`${environment.serverURL}/posts/picture`, this.fd).subscribe();
      await this.httpClient.post(`${environment.serverURL}/posts`, newPostForm.value).subscribe();
      this.timelineService.getArticles().then(data => {
        this.timelineService.articles.next(data);
      })
      this.isOpen = !this.isOpen;
      newPostForm.reset();
    }
else{
  this.photoRequired = true;
  setTimeout(() => {
    this.photoRequired = false;
  }, 2000);
}
    /* if (newPostForm.value['text'] != '' && newPostForm.value['text'] != null) {
      console.log('posteo solo texto');
      console.log(newPostForm.value['text']);      
      await this.httpClient.post(`${environment.serverURL}/posts`, newPostForm.value).subscribe((post) => {
        this.timelineService.getArticles().then(data => {
          this.timelineService.articles.next(data);
        })
      })   
      this.isOpen = !this.isOpen;   
    }*/ 
    
  }

  createFormData(inputfiles) {
    this.fd = new FormData();
    this.selectedFile = <File>inputfiles.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
  };
}


/* this.httpClient.post(`${environment.serverURL}/posts`, this.fd).subscribe(result => {
  console.log(result);
});  */

/*  await this.timelineService.setArticles(newPostForm.value, this.fd).then((post)=>{
     this.timelineService.getArticles().then(data => {
       this.timelineService.articles.next(data);
     })
   }) */
/*


await this.timelineService.setArticles(newPostForm.value).then((post)=>{
   this.timelineService.getArticles().then(data => {
     this.timelineService.articles.next(data);
   })
 })
 newPostForm.reset();
 this.isOpen = !this.isOpen; */

/*   async onSubmit(e, newPostForm) {

     await this.timelineService.setPictures(this.fd).then(result => {
      console.log('foto subida');
    });
 newPostForm.reset();
    this.isOpen = !this.isOpen;
  }; */

/* this.timelineService.getArticles().then(data => {
    this.timelineService.articles.next(data);
  });
  */

/* await this.timelineService.setArticles(newPostForm.value).then((post) => {
  this.timelineService.getArticles().then(data => {
    this.timelineService.articles.next(data);
  });
}); */


