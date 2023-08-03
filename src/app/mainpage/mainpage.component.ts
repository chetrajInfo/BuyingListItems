import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GroceryOptionService } from 'src/app/grocery-option.service'


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  myForm!: FormGroup;
  mygrocery!: FormGroup;
  showGroceryForm: boolean = false;

  groceryItems: string[] = [];


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
     //i: number = 0;


  constructor(private formBuilder: FormBuilder, private groceryOptionService: GroceryOptionService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      selectedList: ['']
    });

    //this will display grocery list and textbox empty when user click the grocery list item opiton 
    this.mygrocery = this.formBuilder.group({
      groceryName: [''],
      groceryList: ['']
    });
   // Get the groceryOption from the service and display the Grocery Form
    this.groceryOption = this.groceryOptionService.groceryOption; 


  }

  

   // Add this method to handle the change in the dropdown
   onListSelect(event: any) {
    const selectedValue = event.target.value;
    this.showGroceryForm = selectedValue === "grocery"; // Show grocery form only when "grocery" is selected
  }

  addItem():void {
    const selectedGrocery = this.mygrocery.get('groceryList')?.value;
    if (selectedGrocery) {
      this.groceryItems.push(selectedGrocery);
    }
  }

  addNewItem():void {
    const newItem = this.mygrocery.get('groceryName')?.value;
    if (newItem.trim() !== '') {
      this.groceryItems.push(newItem);
      this.mygrocery.get('groceryName')?.reset(); // Reset the form control value after adding
    }
  }

  deleteItem(itemIndex: number): void {
    this.groceryItems.splice(itemIndex, 1); // Remove the item from the array at the specified index
    //const delItem:any = this.mygrocery.get('groceryName')?.value; // const delItem = document.getElementByName('groceryName').value; here ? is optional to check if there is null value or not
  }

  saveItems():void{
    
  }

}
