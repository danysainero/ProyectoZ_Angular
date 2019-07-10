import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors, Form } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginpagelocal',
  templateUrl: './loginpagelocal.component.html',
  styleUrls: ['./loginpagelocal.component.scss']
})
export class LoginpagelocalComponent implements OnInit {
  myForm: any;
  invalid;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router,
    private acivateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required])]
    });
  }

  get f() { return this.myForm.controls; }

  submit(myForm: any) {

    /* window.location.replace('verify'); */

    if (this.myForm.valid) {
      this.authService.loginUser(this.myForm.value).then((token) => { 
        this.router.navigate(['../', 'verify'], {
          relativeTo: this.acivateRoute
        });     
      
      });
    } else {
      this.invalid = true;
      console.log('errores en el form', this.myForm.value);
    }
  }
}
