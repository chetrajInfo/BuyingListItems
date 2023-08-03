import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryOptionService {

  
  groceryOption =[
    { value: '', label: 'Select Items' },
    { value: 'Yogurt', label: 'Yogurt' },
    { value: 'Milk', label: 'Milk' },
    { value: 'Cookies', label: 'Cookies' },
    { value: 'Candy', label: 'Candy' },
    { value: 'Cake', label: 'Cake' },
    { value: 'Sweet', label: 'Sweet' },
    { value: 'Donut', label: 'Donut' },
    { value: 'Bread', label: 'Bread' },
    { value: 'Cooking-Oil', label: 'Cooking Oil' },
    { value: 'Salt', label: 'Salt' },
    { value: 'Sugar', label: 'sugar' },
    { value: 'HandSoap', label: 'Hand Wash' },
    { value: 'Detergent', label: 'Detergent' },
    { value: 'Dish-Washer-Liquid', label: 'Dish Washer Liquid' }
  ];


  constructor() { }
}
