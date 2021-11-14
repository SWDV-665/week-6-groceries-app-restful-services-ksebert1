import { Component } from '@angular/core';



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

editItem(item,i){
this.editItemPrompt(item,i)
}


removeItem(item,i){
  console.log("Removing Item - .", item,i)
  this.items.splice(i,1)
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
        this.items.push(item)
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
            this.items[i] = item;
          }
        }
      ]

      document.body.appendChild(editAlert);
      return editAlert.present();
    }

        




  





}