import { Component } from '@angular/core';
import { toastController } from '@ionic/core';
import { NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 title = "Grocery";

 items = [
  {
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
  },
]

constructor() {}


addItem(){
  this.presentItemPrompt()
}

removeItem(item,i){
  console.log("Removing Item - .", item,i)
  this.items.splice(i,1)
}

 presentItemPrompt() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Enter Item';
  alert.inputs = [
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
  alert.buttons = [
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
        this.items.push(item)
      }
    }
  ];

  document.body.appendChild(alert);
  return alert.present();
}



}