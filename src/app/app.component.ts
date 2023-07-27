import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup | any;

  options = [
    { value: '', label: 'Choose the Lists' },
    { value: 'clothingAcces', label: 'Clothing And Accessory' },
    { value: 'entertainment', label: 'Entertainment And Hobbies' },
    { value: 'grocery', label: 'Grocery Items' },
    { value: 'healthWellness', label: 'Health And Wellness' },
    { value: 'houseHold', label: 'Household Items' },
    { value: 'personalCare', label: 'Personal Care' },
    { value: 'subscription', label: 'Subscription Lists' },
    { value: 'travel', label: 'Travel Lists' }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      selectedList: [''] // Default value for the select element
    });
  }

}