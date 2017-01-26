import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  //Angular 2 uses Rx.js Observables instead of promises for dealing with HTTP
  //But, we use toPromise() in order to get from an Observable<Response> to a Promise<Response>

  getData(){
    return this.http.get("app/data.json").toPromise() //getting data from local data.json file
      .then(function(response){                       //using Promises to get a response or error object
        return response.json();
      })
      .catch(function(error){
        return error;
      })
  }

}
