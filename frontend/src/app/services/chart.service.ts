import { Injectable } from '@angular/core';
import dictionary from '../models/CountriesInfo';
import { HistogramData } from '../models/HistogramData';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  data = {
    chart: {
      legendposition: "BOTTOM",
      entitytooltext: "$lname",
      entityfillhovercolor: "#FFCDD2",
      nullentitycolor: "#fffff0",
      theme: "fusion",
      borderColor: "#000000",
      
    },
    colorrange: {
      minvalue: "0",
      code: "#FFE0B2",
      gradient: "0",
      color: [
        {
          maxvalue: "0",
          displayvalue: "No Data available",
          code: "#ffffff"
        },
        {
          minvalue: "1",
          displayvalue: "Data available",
          code: "#EF9A9A"
        }
      ]
    },
    data: [{
      id: "019",
      value: "1",
      showLabel: "1"
    }, {
      id: "013",
      value: "1",
      showLabel: "1"
    }]
  };

  constructor() { }

  public getMap(){
    return this.data;
  }

  public getMapByName(name: string): string{
    return dictionary[name];
  }

  public buildHistogram(country: string, year: number, data: HistogramData[]){
    let d = {
      chart: {
        caption: country + ' in ' + year,
        xaxisname: "Crime",
        yaxisname: "Number",
        theme: "fusion"
      },
      data: data
    };
    return d;
  }
}
