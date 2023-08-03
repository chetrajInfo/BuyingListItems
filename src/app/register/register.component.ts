import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.register = this.formBuilder.group({
      username: ['', Validators.required], // Username is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be a valid email
      passwordOne: ['', Validators.required], // Password is required
      passwordTwo: ['', Validators.required], // Re-type Password is required
    }, {
      validators: this.passwordsMatchValidator // Custom validator to check if passwords match
    });
  }

  // Custom validator function to check if passwords match
  passwordsMatchValidator(group: FormGroup) {
    const passwordOne = group.get('passwordOne')?.value;
    const passwordTwo = group.get('passwordTwo')?.value;

    // Check if both passwords are the same
    return passwordOne === passwordTwo ? null : { passwordsNotMatch: true };
  }

}
