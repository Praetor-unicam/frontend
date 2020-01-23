import { Injectable } from '@angular/core';
import { HistogramData } from '../models/HistogramData';
import { DataService } from './data.service';
import * as europe_codes from './../countries/map_codes.json';


const EUROPE_NULL_COLOR = '#000000';
const COUNTRY_NULL_COLOR = '#004c7f';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  public data: any;
  public chartData: any;
  public europeChartData: any;

  constructor(private dataService: DataService){
    let availableCountries = this.dataService.getAvailableCountries();
    //console.log(europe_codes);
    let codes: any = europe_codes;
    let chartData: { id: string, value: number, showLabel: number}[] = [];
    codes.default.forEach((country_code: {id: string, name: string}) => {
      if(availableCountries.indexOf(country_code.name) > -1){
        let newChartData = { id: country_code.id, value: 1, showLabel: 0 };
        chartData.push(newChartData);
      }
      this.europeChartData = chartData;
      this.chartData = this.europeChartData;
    });
    this.refreshChart(this.chartData, EUROPE_NULL_COLOR);
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

  public refreshChart(chartData: any, nullColor: string){
    this.data = {
      chart: {
        legendposition: "BOTTOM",
        entitytooltext: "$lname",
        entityfillhovercolor: "#149af8",
        nullentitycolor: nullColor,
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

}
