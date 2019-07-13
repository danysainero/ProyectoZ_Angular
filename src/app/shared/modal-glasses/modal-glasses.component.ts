import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modal-glasses',
  templateUrl: './modal-glasses.component.html',
  styleUrls: ['./modal-glasses.component.scss']
})
export class ModalGlassesComponent implements OnInit {
user;

  constructor(private authService : AuthService) { }

  async ngOnInit() {

    this.user = await this.authService.GetActualUser().then((myUser)=>{
  this.user = myUser['username'];
return this.user;
})

  }

}
