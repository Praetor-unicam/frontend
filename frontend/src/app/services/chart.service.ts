import { Injectable } from '@angular/core';
import dictionary from '../models/CountriesInfo';
import { HistogramData } from '../models/HistogramData';
import { DataService } from './data.service';
import * as europe_codes from './../countries/map_codes.json';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  public data;

  constructor(private dataService: DataService){
    let availableCountries = this.dataService.getAvailableCountries();
    console.log(europe_codes);
    let codes: any = europe_codes;
    let chartData: { id: string, value: number, showLabel: number}[] = [];
    codes.default.forEach((country_code: {id: string, name: string}) => {
      if(availableCountries.indexOf(country_code.name) > -1){
        let newChartData = { id: country_code.id, value: 1, showLabel: 0 };
        chartData.push(newChartData);
      }

    });
    this.data = {
      chart: {
        legendposition: "BOTTOM",
        entitytooltext: "$lname",
        entityfillhovercolor: "#149af8",
        nullentitycolor: "#000000",
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
            code: "#000000"
          },
          {
            minvalue: "1",
            displayvalue: "Data available",
            code: "#004c7f"
          }
        ]
      },
      data: chartData
    };
  }

  

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
