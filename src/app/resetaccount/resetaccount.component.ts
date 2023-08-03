import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetaccount',
  templateUrl: './resetaccount.component.html',
  styleUrls: ['./resetaccount.component.css']
})
export class ResetaccountComponent {

    reset!:FormGroup;
    constructor(private formBuilder: FormBuilder) {
      this.reset = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]], // Email is required and must be a valid email
      });
    }
}
