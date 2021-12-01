import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroceriesServiceService } from './groceries-service.service';
import { Item } from './item';




@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {
  items: Item[] = [];

  constructor(public dataService: GroceriesServiceService) { }


  
    editItemPrompt(item: Item) {
        console.log("In the prompt: " + JSON.stringify(item));
        const editAlert = document.createElement('ion-alert');
        editAlert.cssClass = 'my-custom-class';
        editAlert.header = 'Edit Item';
        editAlert.inputs = [
          {
            name: '_id',
            id: 'itemId',
            value: item._id,
            disabled: true
           
          },
           {
            name: 'brand',
            id: 'itemBrand',
            value: item.brand
           
          },
          {
            name: 'name',
            id: 'itemName',
            value: item.name
          },
          {
            name: 'size',
            id: 'itemSize',
            value: item.size
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
              console.log("about to send to update item: " + JSON.stringify(item) + item._id);
              this.dataService.updateItem( item,item._id);

            }
          }
        ]
  
        document.body.appendChild(editAlert);
        return editAlert.present();

      }

        showPrompt() {
          const prompt = document.createElement('ion-alert');
          prompt.cssClass = 'my-custom-class';
          prompt.message =  "Add Item";
          prompt.inputs = [
             {
              name: 'brand',
              placeholder: 'Brand',
              id: 'itemBrand',            
             
            },
            {
              name: 'name',
              placeholder: 'Name of Item',
              id: 'itemName',

            },
            {
              name: 'size',
              placeholder: 'Size, e.g. loaf or 14. oz, box',
              id: 'itemSize',

            },
            {
              name: 'quantity',
              placeholder: 'Enter amount of item',
              type: 'number',
              min: 1,
              max: 999999999999,

            }
        
          ]

          prompt.buttons = [
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
                console.log('Confirm Ok', item)
                this.dataService.addItem(item);           

              }
            }
          ]
    
          document.body.appendChild(prompt);
          return prompt.present();





      }
  
    }         
  
  
  
  
    
  
  



