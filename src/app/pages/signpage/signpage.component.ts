import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signpage',
  templateUrl: './signpage.component.html',
  styleUrls: ['./signpage.component.scss']
})

export class SignpageComponent implements OnInit {

  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  addExtraClass: boolean = false;

  @Input() value;
  myFormRegister;
  submitted = false;
  
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router,
    private acivateRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.myFormRegister = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],//el primer elemento del array, es el valor por defecto que tendrá el formulario. Luego vienen las validaciones con el validator compose y dentro un array de validaciones
      email: ['', Validators.compose([Validators.required, Validators.email])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      gender: ['', Validators.compose([Validators.required])]
    });


  }
  get f() { return this.myFormRegister.controls}

  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    /* if (this.myFormRegister.invalid) {
        return;
    }*/
    this.userService.RegisterUser(this.myFormRegister.value).then(() => {
      this.openSnackBar('User Created!!!', 'X', 'my-snackbar')
      this.router.navigate(['../', 'login'], {
        relativeTo: this.acivateRoute
      });
    });
  }

  //Styles in styles.scss
  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: [className]
    });
  }
}

