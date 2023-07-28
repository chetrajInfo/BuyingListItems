import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GroceryOptionService } from './grocery-option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm!: FormGroup;
  mygrocery!: FormGroup;


  showGroceryForm:boolean = true; 

  groceryOption!: any[]  // Declare the groceryOption property in the AppComponent
  
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


  constructor(private formBuilder: FormBuilder, private groceryOptionService: GroceryOptionService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      selectedList: ['']
    });

    this.mygrocery = this.formBuilder.group({
      groceryName: [''],
      groceryList: ['']
    });

    this.groceryOption = this.groceryOptionService.groceryOption; // Get the groceryOption from the service
  }

  

   // Add this method to handle the change in the dropdown
   onListSelect(event: any) {
    const selectedValue = event.target.value;
    this.showGroceryForm = selectedValue === "grocery"; // Show grocery form only when "grocery" is selected
  }

}