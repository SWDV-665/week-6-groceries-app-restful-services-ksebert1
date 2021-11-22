import { Component } from '@angular/core';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

 title = "Grocery List Items";

constructor(public dataService: GroceriesServiceService, public InputDialogServiceService: InputDialogServiceService, private socialSharing: SocialSharing ) {}

loadItems(){
  return this.dataService.getItems();
}

addItem(){
  this.InputDialogServiceService.showPrompt()
}

editItem(item,i){
this.InputDialogServiceService.showPrompt(item,i)
}

 shareItem(item){
  var message = "Grocery Item: " + "Brand: "+ item.brand + "Size: "+ item.size + "Name: "+ item.name + "Quantity: "+ item.quantity ;
  var subject = "Shared via Groceries app";  
  this.socialSharing.share(message, subject).then(() => {
    // Sharing via email is possible
    console.log('Shared Successfully')
  }).catch((error) => {
      // Error!
  console.error("Error while sharing ",error)
    });

  }


removeItem(item,i){
  console.log("Removing Item - .", item,i)
  this.dataService.removeItem(i);
} 






}