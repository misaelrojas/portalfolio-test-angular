import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductFull } from '../../interfaces/product-full.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductFull;
  id: string;


  constructor( private route: ActivatedRoute, public productService: ProductsService ) { }

  ngOnInit() {

    this.route.params.subscribe( parametros => {
      console.log( parametros.id );

      this.productService.getProduct( parametros.id )
        .subscribe( (resp: ProductFull) => {
            this.id = parametros.id;
            console.log(resp);
            this.product = resp;

        })
    })

  }

}
