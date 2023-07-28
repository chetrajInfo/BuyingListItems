import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryOptionService {

  
  groceryOption =[
    { value: '', label: 'Select Items' },
    { value: 'yogurt', label: 'Yogurt' },
    { value: 'milk', label: 'Milk' },
    { value: 'cookies', label: 'Cookies' },
    { value: 'candy', label: 'Candy' },
    { value: 'cake', label: 'Cake' },
    { value: 'sweet', label: 'Sweet' },
    { value: 'donut', label: 'Donut' },
    { value: 'bread', label: 'Bread' },
    { value: 'cookingOil', label: 'Cooking Oil' },
    { value: 'salt', label: 'Salt' },
    { value: 'sugar', label: 'sugar' },
    { value: 'handSoap', label: 'Hand Wash' },
    { value: 'detergent', label: 'Detergent' },
    { value: 'dishWasher', label: 'Dish Washer Liquid' }
  ];


  constructor() { }
}
