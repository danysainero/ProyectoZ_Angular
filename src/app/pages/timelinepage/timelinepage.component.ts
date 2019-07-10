import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimelineService } from 'src/app/service/timeline.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';




@Component({
  selector: 'app-timelinepage',
  templateUrl: './timelinepage.component.html',
  styleUrls: ['./timelinepage.component.scss']
})

export class TimelinepageComponent implements OnInit, OnDestroy {

  arrayApiPosts;
  urlConection;
  postsServiceSubscription: Subscription;
  actualUserId;

  constructor(private timelineService: TimelineService, private authService: AuthService, private httpClient: HttpClient) { 
    
  }

  ngOnInit() {

    this.authService.GetActualUser().then((user)=>{        
      this.actualUserId =  user['_id'];
      });
     
    this.getApiPosts();
    this.postsServiceSubscription = this.timelineService.articles.subscribe(data => {
      if(data) {
        this.arrayApiPosts = data;
      }
    })

    this.urlConection = '192.169.1.55';     
   
    
  }

  ngOnDestroy(){
    if(this.postsServiceSubscription){
      this.postsServiceSubscription.unsubscribe();
    }
  }


  async getApiPosts(){
   let data = await this.timelineService.getArticles();
     this.arrayApiPosts =  data;
   }

   

}
