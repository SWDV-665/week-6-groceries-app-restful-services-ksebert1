import { Injectable } from '@angular/core';
import { GroceriesServiceService } from './groceries-service.service';



// @Component ({
// selector: 'select-example',
// templateJitUrl: 'select-example.html',
// styleUrls: ['./select-example.css']
// })




@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public dataService: GroceriesServiceService) { }

  // presentItemPrompt() {
  //   const presentAlert = document.createElement('ion-alert');
  //   presentAlert.cssClass = 'my-custom-class';
  //   presentAlert.header = 'Enter Item';
  //   presentAlert.inputs = [
  //      {
  //       name: 'brand',
  //       id: 'itemBrand',
  //       placeholder: 'Enter item brand information.'
  //     },
  //     {
  //       name: 'name',
  //       id: 'itemName',
  //       placeholder: 'Enter item name.'
  //     },
  //     {
  //       name: 'size',
  //       id: 'itemSize',
  //       placeholder: 'Enter item size (14 oz., loaf, box, etc.)'
  //     },

  //     {
  //       name: 'quantity',
  //       placeholder: 'Enter amount to add',
  //       type: 'number',
  //       min: 1,
  //       max: 999999999999
  //     }
  
  //   ];
  //   presentAlert.buttons = [
  //     {
  //       text: 'Cancel',
  //       role: 'cancel',
  //       cssClass: 'secondary',
  //       handler: () => {
  //         console.log('Confirm Cancel')
  //       }
  //     }, {
  //       text: 'Ok',
  //       handler: item => {
  //         console.log('Confirm Ok')
  //         this.dataService.addItem(item);
  //       }
  //     }
  //   ]
  
  //   document.body.appendChild(presentAlert);
  //   return presentAlert.present();
  // }
  
  //   editItemPrompt(item,i) {
  //       const editAlert = document.createElement('ion-alert');
  //       editAlert.cssClass = 'my-custom-class';
  //       editAlert.header = 'Enter Item';
  //       editAlert.inputs = [
  //          {
  //           name: 'brand',
  //           id: 'itemBrand',
  //           value: item.brand
           
  //         },
  //         {
  //           name: 'name',
  //           id: 'itemName',
  //           value: item.name
  //         },
  //         {
  //           name: 'size',
  //           id: 'itemSize',
  //           value: item.size
  //         },

  //         {
  //           name: 'quantity',
  //           placeholder: 'Enter amount to add',
  //           type: 'number',
  //           min: 1,
  //           max: 999999999999,
  //           value: item.quantity
  //         }
      
  //       ]
  //       editAlert.buttons = [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           cssClass: 'secondary',
  //           handler: () => {
  //             console.log('Confirm Cancel')
  //           }
  //         }, {
  //           text: 'Ok',
  //           handler: item => {
  //             console.log('Confirm Ok')
  //             this.dataService.editItem(item, i);
  //           }
  //         }
  //       ]
  
  //       document.body.appendChild(editAlert);
  //       return editAlert.present();

  //     }

        showPrompt(item?,i?) {
          const prompt = document.createElement('ion-alert');
          prompt.cssClass = 'my-custom-class';
          prompt.header = item ? 'Edit Item' : "Add Item";
          prompt.message = item ? "Please Edit Item..." : "Please Add Item..."
          prompt.inputs = [
             {
              name: 'brand',
              placeholder: 'Brand',
              id: 'itemBrand',
              value: item ? item.brand : null
             
            },
            {
              name: 'name',
              placeholder: 'Name of Item',
              id: 'itemName',
              value: item ? item.name : null
            },
            {
              name: 'size',
              placeholder: 'Size, e.g. loaf or 14. oz, box',
              id: 'itemSize',
              value: item ? item.size : null
            },
            {
              name: 'quantity',
              placeholder: 'Enter amount of item',
              type: 'number',
              min: 1,
              max: 999999999999,
              value: item ?  item.quantity : null
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
                if (i !== undefined) {
                  this.dataService.editItem(item, i);
                }
                else {
                  this.dataService.addItem(item);
                }

              }
            }
          ]
    
          document.body.appendChild(prompt);
          return prompt.present();





      }
  
          
  
  
  
  
    
  
  


}
