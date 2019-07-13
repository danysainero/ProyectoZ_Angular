import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TimelineService } from 'src/app/service/timeline.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {

  @Input() post;
  user = {};
  urlConection;


  constructor(private httpClient: HttpClient, private timelineService: TimelineService) {

  }
  ngOnChanges(){
    
  }

  ngOnInit() {      
    this.urlConection = `${environment.localIp}`;
    //this.getUserPost();
  }

  /* async getUserPost(){
    await this.timelineService.getUserPosted(this.post.userId).then((user)=>{ 
      this.user =  user;
     });   
  } */

}
