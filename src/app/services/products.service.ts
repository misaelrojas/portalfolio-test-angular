import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  product: Product;
  productsFiltered: Product[] = [];

  constructor( private http: HttpClient) { 

      this.loadProducts();

  }


private loadProducts() {

  return new Promise( (resolve, reject) => {
    this.http.get('https://angular-test-f06e8.firebaseio.com/products_idx.json')
    .subscribe( (resp: Product[]) => {

      this.products=resp;
      this.loading = false;
      resolve();

      //setTimeout(()=> {
  //      this.products=resp;
      //this.loading = false;
  //    }, 2000);
    } );
  }

  );


  }

  getProduct( id: string) {
    return this.http.get(`https://angular-test-f06e8.firebaseio.com/products/${id}.json`);
  }

  searchProduct ( toSearch: string) {

    if ( this.products.length === 0 ) {
      //load products
      this.loadProducts().then( ()=> {
        //apply filters
        this.filterProducts( toSearch );
      });
    }else{
      //apply filter
      this.filterProducts( toSearch );

    }

    
  }


  private filterProducts(toSearch: string) {

    this.productsFiltered = [];
    toSearch = toSearch.toLocaleLowerCase();
    
    this.products.forEach( prod => {
      if ( prod.categoria.toLocaleLowerCase().indexOf( toSearch ) >= 0 || prod.titulo.toLocaleLowerCase().indexOf( toSearch ) >= 0  ) {
        this.productsFiltered.push( prod );
      }
    })

  }

}
