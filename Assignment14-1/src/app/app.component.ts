import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProductService ]   //add the service in list of providers
})
export class AppComponent implements OnInit{

  title: string = "Books List:"

  constructor( public prodService: ProductService){}

  products: any = [];

  ngOnInit(){
    this.prodService.getData().then(          //call the getData method from the service
      response => this.products = response,   //you get a response object or an error
      error => console.log(error)             //the response is an array of objects which is stored in a local variable
    )
  }

}
