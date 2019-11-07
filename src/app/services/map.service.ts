import { Injectable } from '@angular/core';
import dictionary from './../models/CountriesInfo';

@Injectable({
  providedIn: 'root'
})
export class MapService {



  data = {
    chart: {
      caption: "Europe",
      legendposition: "BOTTOM",
      entitytooltext: "$lname",
      entityfillhovercolor: "#FFCDD2",
      theme: "fusion"
    },
    colorrange: {
      gradient: "0",
      color: [
        {
          maxvalue: "0",
          displayvalue: "No Data available",
          code: "#000000"
        },
        {
          maxvalue: "1",
          displayvalue: "Data available",
          
          code: "#EF9A9A"
        }
      ]
    }
  };

  constructor() { }

  public getMap(){
    return this.data;
  }

  public getMapByName(name: string): string{
    console.log(dictionary)
    return dictionary[name];
  }
}
