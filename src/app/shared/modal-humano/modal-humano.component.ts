import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modal-humano',
  templateUrl: './modal-humano.component.html',
  styleUrls: ['./modal-humano.component.scss']
})
export class ModalHumanoComponent implements OnInit {
user
  constructor(private authService : AuthService) { }

  async ngOnInit() {
    this.user = await this.authService.GetActualUser().then((myUser)=>{
      this.user = myUser['username'];
    return this.user;
    })
  }

}
