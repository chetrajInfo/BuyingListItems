import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login!: FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.login = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }
  
}
