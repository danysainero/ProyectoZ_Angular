import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor(private userService: UserService, private fb: FormBuilder, private router: Router,
    private acivateRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  myFormRegister;

  ngOnInit() {
    this.myFormRegister = this.fb.group({
      username: ['', Validators.compose([Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.minLength(6)])],
      faceId: ['']
    });
  }

  get f() { return this.myFormRegister.controls }

  logOut() {
    this.userService.logout();

    this.router.navigate(['../', 'login'], {
      relativeTo: this.acivateRoute
    });

  }


  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: [className]
    });
  }
}
