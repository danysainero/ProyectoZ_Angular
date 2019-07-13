import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modal-sun-glasses',
  templateUrl: './modal-sun-glasses.component.html',
  styleUrls: ['./modal-sun-glasses.component.scss']
})
export class ModalSunGlassesComponent implements OnInit {
user;
  constructor(private authService : AuthService) { }

  async ngOnInit() {
    this.user = await this.authService.GetActualUser().then((myUser)=>{
      this.user = myUser['username'];
    return this.user;
    })
  }

}
