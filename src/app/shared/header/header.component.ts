import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
      public _infoPage: InfoPageService,
      private router: Router
     ) { }

  ngOnInit() {
  }


  searchProduct(toSearch: string) {
    if( toSearch.length < 1 ) {
      return;
    }

    console.log(toSearch);
    this.router.navigate(['/search', toSearch]);
  }

}
