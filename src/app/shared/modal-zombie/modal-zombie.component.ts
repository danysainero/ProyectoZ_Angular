import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modal-zombie',
  templateUrl: './modal-zombie.component.html',
  styleUrls: ['./modal-zombie.component.scss']
})
export class ModalZombieComponent implements OnInit {
  user;
  constructor(private authService : AuthService) { }

  async ngOnInit() {
    this.user = await this.authService.GetActualUser().then((myUser)=>{
      this.user = myUser['username'];
    return this.user;
    })
  }

}
