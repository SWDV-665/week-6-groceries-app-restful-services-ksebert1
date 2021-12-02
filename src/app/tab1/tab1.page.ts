import { Component, OnInit} from '@angular/core';
import { Item } from '../item';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit{
  items: Item[] = [];
  
  title = "Grocery Items";
    // errorMessage = ''

  constructor(public dataService: GroceriesServiceService, public InputDialogServiceService: InputDialogServiceService, private socialSharing: SocialSharing ) {}

  ngOnInit(): void {
    this.loadItems();
    
  }

  loadItems(){
    this.dataService.getItems()
    .subscribe(items => this.items = items);   
  }

  addItem(){

    this.InputDialogServiceService.showPrompt()
   

  }

  editItem(item: Item): void {
    console.log("Sending: " + JSON.stringify(item))
    this.InputDialogServiceService.editItemPrompt(item)
    this.dataService.getItems()
  }

 shareItem(item: any){
  console.log("Sharing item: ", item)
  var message = "Grocery Item: " + "Brand: "+ item.brand + "Size: "+ item.size + "Name: "+ item.name + "Quantity: "+ item.quantity ;
  var subject = "Shared via Groceries app";  
  this.socialSharing.share(message, subject).then(() => {
    //If Sharing via email is possible
    console.log('Shared Successfully')
  }).catch((error) => {
      // Error!
  console.error("Error while sharing ",error)
    });

  }


removeItem(id: string){
  console.log("Removing Item - " +  id)
  this.dataService.deleteItem(id);
  this.dataService.getItems();
  
  
} 






}