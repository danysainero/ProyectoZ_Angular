import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimelineService } from 'src/app/service/timeline.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';




@Component({
  selector: 'app-timelinepage',
  templateUrl: './timelinepage.component.html',
  styleUrls: ['./timelinepage.component.scss']
})

export class TimelinepageComponent implements OnInit, OnDestroy {

  arrayApiPosts;
  urlConection;
  postsServiceSubscription: Subscription;
  
  constructor(private timelineService: TimelineService, private userService: UserService, private httpClient: HttpClient) { 
    
  }

  ngOnInit() {
    this.getApiPosts();
    this.postsServiceSubscription = this.timelineService.articles.subscribe(data => {
      if(data) {
        this.arrayApiPosts = data;
      }
    })

    this.urlConection = '192.169.1.55';   
    
    this.userService.GetActualUser().subscribe(data=>{
      console.log(data);
      
    })
  }

  ngOnDestroy(){
    if(this.postsServiceSubscription){
      this.postsServiceSubscription.unsubscribe();
    }
  }


  async getApiPosts(){
    const data = await this.timelineService.getArticles();
     this.arrayApiPosts =  data;
   }

   

}
