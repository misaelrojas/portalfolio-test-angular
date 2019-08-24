import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  team: any[] = [];

  constructor( private http: HttpClient ) {

    //console.log("servicio cargado");
    this.loadInfo();
    this.loadTeam();

  }

  private loadInfo(){
    this.http.get('assets/data/data-page.json')
    .subscribe( (response :InfoPage) => {

      console.log(response);
      console.log(response['instagram']);

      this.loaded = true;
      this.info = response;

    });
  }

  private loadTeam() {
    this.http.get('https://watashi.firebaseio.com/equipo/equipo.json')
    .subscribe( (response: any) => {

      console.log('response team', response);

      this.loaded = true;
      this.team = response;

    });
  }


}
