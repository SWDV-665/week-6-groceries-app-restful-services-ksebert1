import { Component } from '@angular/core';
import { GroceriesServiceService } from '../groceries-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

 title = "Grocery List Items";

constructor(public dataService: GroceriesServiceService) {}

loadItems(){
  return this.dataService.getItems();
}

addItem(){
  this.presentItemPrompt()
}

editItem(item,i){
this.editItemPrompt(item,i)
}


removeItem(item,i){
  console.log("Removing Item - .", item,i)
  this.dataService.removeItem(i);
} 

presentItemPrompt() {
  const presentAlert = document.createElement('ion-alert');
  presentAlert.cssClass = 'my-custom-class';
  presentAlert.header = 'Enter Item';
  presentAlert.inputs = [
     {
      name: 'brand',
      id: 'itemBrand',
      placeholder: 'Enter item brand information.'
    },
    {
      name: 'size',
      id: 'itemSize',
      placeholder: 'Enter item size (14 oz., loaf, box, etc.)'
    },
    {
      name: 'name',
      id: 'itemName',
      placeholder: 'Enter item name.'
    },
    {
      name: 'quantity',
      placeholder: 'Enter amount to add',
      type: 'number',
      min: 1,
      max: 999999999999
    }

  ];
  presentAlert.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Confirm Cancel')
      }
    }, {
      text: 'Ok',
      handler: item => {
        console.log('Confirm Ok')
        this.dataService.addItem(item);
      }
    }
  ]

  document.body.appendChild(presentAlert);
  return presentAlert.present();
}

  editItemPrompt(item,i) {
      const editAlert = document.createElement('ion-alert');
      editAlert.cssClass = 'my-custom-class';
      editAlert.header = 'Enter Item';
      editAlert.inputs = [
         {
          name: 'brand',
          id: 'itemBrand',
          value: item.brand
         
        },
        {
          name: 'size',
          id: 'itemSize',
          value: item.size
        },
        {
          name: 'name',
          id: 'itemName',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Enter amount to add',
          type: 'number',
          min: 1,
          max: 999999999999,
          value: item.quantity
        }
    
      ]
      editAlert.buttons = [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: item => {
            console.log('Confirm Ok')
            this.dataService.editItem(item, i);
          }
        }
      ]

      document.body.appendChild(editAlert);
      return editAlert.present();
    }

        




  





}