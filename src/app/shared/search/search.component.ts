import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  mySearchForm;  
  

  constructor(private fb: FormBuilder,private userService: UserService) {}
 
  ngOnInit() {
    this.mySearchForm = this.fb.group({inputSearch: null});
  }


  async searchFriends(e){   
      await this.userService.filterUsers(e).then((userFiltered)=>{
      
        this.userService.usersFiltered.next(userFiltered);
    })
    
    
  }
 
}

