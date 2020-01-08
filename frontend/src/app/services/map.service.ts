import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  public maps = [];

  constructor(private http: HttpClient) { 
  }

  /*
  public getMapByID(id: string){
    let file: string;
    switch(id){
      case 'EU': file = 'assets/maps/EU.geojson'; 
      break;
      case 'IT': file = 'assets/maps/IT.geojson'; 
      break;
      case 'ITI': file = 'assets/maps/ITI.geojson'; 
      break;
      case 'ITI1': file = 'assets/maps/ITI1.geojson'; 
      break;
      case 'ITI12': file = 'assets/maps/ITI12.geojson'; 
      break;
    }
    return this.http.get(file);
  }
  */

  public getMapByID(id: string){
    if(id == 'EU'){
      return this.http.get('assets/maps/EU.geojson');
    }
    else{
      return this.http.get('api/map/' + id);
    }
  }
}
