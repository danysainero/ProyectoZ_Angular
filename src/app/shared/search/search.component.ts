import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FriendsService } from 'src/app/service/friends.service';
import { NotfriendsService } from 'src/app/service/notfriends.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  mySearchForm;


  constructor(private fb: FormBuilder, private notfriendsService: NotfriendsService) { }

  ngOnInit() {
    this.mySearchForm = this.fb.group({ inputSearch: null });    
  }


  async searchFriends(e) {
    console.log(e);
    await this.notfriendsService.filterUsers(e).then((userFiltered) => {
      this.notfriendsService.usersFiltered.next(userFiltered);
    }); 
    
     /* await this.notfriendsService.filterUsers(e).then((userFiltered) => {
      this.notfriendsService.usersFiltered.next(userFiltered);
    }); */
    /* if (e==='') {
      await this.notfriendsService.getNoFriends().then((allusers)=>{      
        this.notfriendsService.notFriends.next(allusers);
      });
        await this.notfriendsService.getOnlyFriends().then((allusers)=>{      
          this.notfriendsService.OnlyFriends.next(allusers);
      });
    }
    
    else{
      await this.notfriendsService.filterUsers(e).then((userFiltered)=>{      
        this.notfriendsService.usersFiltered.next(userFiltered);
    })
    } */
    /* if (e != '') {
      await this.notfriendsService.filterUsers(e).then((userFiltered) => {
        this.notfriendsService.usersFiltered.next(userFiltered);
      });
    } else {
      await this.notfriendsService.getNoFriends('').then((allusers) => {
        this.notfriendsService.notFriends.next(allusers);
      });
      await this.notfriendsService.getOnlyFriends('').then((allusers) => {
        this.notfriendsService.OnlyFriends.next(allusers);
      });
    } */

  }

}