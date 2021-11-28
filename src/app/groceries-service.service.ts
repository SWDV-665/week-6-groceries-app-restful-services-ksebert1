import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs/Observable';
import { from, Observable, Observer, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { MapType } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class GroceriesServiceService {

  items: any = [];

  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  baseURL = "http://localhost:8080";

  constructor(public http: HttpClient){
    console.log("Hello GroceriesServiceProvider Provider")
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ =  this.dataChangeSubject.asObservable();      
  }

  getItems(): Observable<any> {
    return this.http.get(this.baseURL + '/api/groceries').pipe(
     map(this.extractData),
     catchError(this.handleError) 
    );
  }

  // getItems(): Observable<object[]> {
  //   let response = this.http.get(this.baseURL + '/api/groceries').map((response: Response) => response.json());
  //   return response;
  //   return this.http.get(this.baseURL + '/api/groceries').pipe(
  //    map<Observable<object>(this.extractData),
  //    catchError(this.handleError) 
  //   );
  // }


  private extractData(res:Response){
    let body = res;
    return body || {};
  }
  
  private handleError(error: Response | any){
    let errMsg: string;
    if (error instanceof Response){
      const err = error || '';
      errMsg = `${error.status}- ${error.statusText || ''} ${err}` ;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
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
 
shareItem(item){
  console.log("Sharing Item - .", item)
  this.shareItem(item)
} 

  //constructor() {   }

}
