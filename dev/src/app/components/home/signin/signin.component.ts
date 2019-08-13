import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  public error: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  public trySignin() {
    this.authService.signin(this.form.value).subscribe(() => {
      this.router.navigate(['/']);
    }, err => {
      this.error = err.error
    })
  }

}
