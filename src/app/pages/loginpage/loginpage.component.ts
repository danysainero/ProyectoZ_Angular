import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors, Form } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  myForm: any;
  invalid;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router,
    private acivateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required])]
    });
  } 

  get f() { return this.myForm.controls; }

   submit(myForm: any) {
    window.location.replace('verify');

   /*  if (this.myForm.valid) {
      console.log('formulario valido', this.myForm.value);
      this.userService.checkUserCredentials(this.myForm.value);
    } else {
      this.invalid = true;
      console.log('errores en el form', this.myForm.value);
    } */
  } 
}

