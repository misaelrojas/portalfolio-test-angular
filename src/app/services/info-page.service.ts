import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  constructor( private http: HttpClient ) {

    //console.log("servicio cargado");
  
    this.http.get('assets/data/data-page.json')
      .subscribe( (response :InfoPage) => {

        console.log(response);
        console.log(response['instagram']);

        this.loaded = true;
        this.info = response      
        
      });
  }
}
