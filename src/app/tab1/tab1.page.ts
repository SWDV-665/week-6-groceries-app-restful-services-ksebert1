import { Component } from '@angular/core';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

 title = "Grocery List Items";

constructor(public dataService: GroceriesServiceService, public InputDialogServiceService: InputDialogServiceService) {}

loadItems(){
  return this.dataService.getItems();
}

addItem(){
  this.InputDialogServiceService.showPrompt()
}

editItem(item,i){
this.InputDialogServiceService.showPrompt(item,i)
}


removeItem(item,i){
  console.log("Removing Item - .", item,i)
  this.dataService.removeItem(i);
} 





}