import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  added;
  i;
  @Input() user;
  @Input() index;

  
  constructor() {}

  ngOnInit() {
    this.added = false;
    this.i = this.oddOrEven(this.index)
  }

  oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
   }

  addFriend(){
    this.added = !this.added;
  }

  removeFriend(){
    this.added = !this.added;
  }
}
