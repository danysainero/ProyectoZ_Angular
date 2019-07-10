import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.component.html',
  styleUrls: ['./settingspage.component.scss']
})
export class SettingspageComponent implements OnInit {

  message: string = 'Info changed';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  addExtraClass: boolean = false;


  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router,
    private acivateRoute: ActivatedRoute, private snackBar: MatSnackBar, private settingsService: SettingsService) { }

  myFormRegister;
  actualUser;
  
  ngOnInit() {     
    this.myFormRegister = this.fb.group({
      username: ['', Validators.compose([Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.minLength(6)])],
      faceId: ['']
    });

    this.getActualUser().then(()=>{
      this.myFormRegister = this.fb.group({
        username: [this.actualUser.username],
        pass: [this.actualUser.pass],
        faceId: ['']
      });
    })    
       
  }

  get f() { return this.myFormRegister.controls }

  async getActualUser(){
    this.actualUser = await this.authService.GetActualUser();
  }

  async onSubmit(e, settingsForm){
    settingsForm.value._id = this.actualUser._id;

  await this.settingsService.changeSettings(settingsForm.value);
  await  this.openSnackBar('Info changed!!!', 'X', 'my-snackbar--settings');
}

  async logOut() {
   await this.authService.logout();
    this.router.navigate(['../', 'login'], {
      relativeTo: this.acivateRoute
    });
  }


  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: [className]
    });
  }z
}
