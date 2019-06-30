import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/products.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Producto[] = [];

  constructor( private http: HttpClient) { 

      this.loadProducts();

  }


private loadProducts() {

  this.http.get('https://angular-test-f06e8.firebaseio.com/products_idx.json')
  .subscribe( (resp: Producto[]) => {

    this.products=resp;
    this.loading = false;

    //setTimeout(()=> {
//      this.products=resp;
    //this.loading = false;
//    }, 2000);

    
    
  } );

}

}
