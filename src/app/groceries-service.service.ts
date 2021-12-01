import { Injectable } from '@angular/core';
import { of, from, Observable, Observer, Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators'
import { ArrayType } from '@angular/compiler';
import { Item } from './item';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})

export class GroceriesServiceService {

  // items: any = [];

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // dataChanged$: Observable<boolean>;

  // private dataChangeSubject: Subject<boolean>;

  baseURL = "http://localhost:8080";

  constructor(public http: HttpClient,
              public messageService: MessageService){
  
  }

  pageRefresh(){
    window.location.reload();
  }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseURL + '/api/groceries')
    .pipe(
      tap(_ => this.log('fetched Items')),
      catchError(this.handleError<Item[]>('getItems, []')))
  }

    /** POST: add a new Item to the server */
  addItem(item: Item){
    console.log("Adding: " + item);
    this.http.post(this.baseURL + '/api/groceries', item, this.httpOptions)
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
            this.pageRefresh();
        });




  }

  /** DELETE: delete the Item from the server */
  deleteItem(id: string) {
    console.log("Deleting Item with ID: " + id)
    const url = this.baseURL + '/api/groceries/' + id;
    this.http.delete(this.baseURL + '/api/groceries/' + id)
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
            this.pageRefresh();
        });
}



  /** PUT: update the Item on the server */
  updateItem(item: Item,id: string) {
    console.log("In update item: " + JSON.stringify(item) + id);
     this.http.put(this.baseURL + '/api/groceries/'+ id, item, this.httpOptions)
      .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
            this.pageRefresh();
        }
       ); 
  }

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
   

shareItem(item: ArrayType){
  console.log("Sharing Item - .", item)
  this.shareItem(item)
} 

  // constructor() {   }
  /** Log a Groceries Service message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Groceries-Service: ${message}`);
  }
}
