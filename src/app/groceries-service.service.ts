import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GroceriesServiceService {

  items = [
 /*    {
      brand: "Lactaid",
      size: "Quart",
      name: "2% Milk",
      quantity: 3
    },
    {
      brand: "L'Oven",
      size: "loaf",
      name: "12 Grain Wide Pan Bread",
      quantity: 1
    },
    {
      brand: "Earth Grown",
      size: "14 oz.",
      name: "Extra Firm Tofu",
      quantity: 2
    }, */
  ] 

  getItems(){
    return this.items;
  }
  
 removeItem(i){
  this.items.splice(i,1);
 }

 addItem(item){
  this.items.push(item);
 }

 editItem(item, i){
  this.items[i] = item;
 }
 
  constructor() {   }

}
