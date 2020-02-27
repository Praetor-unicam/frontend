import { Injectable } from '@angular/core';
import { HistogramData } from '../models/HistogramData';
import { DataService } from './data.service';
import * as europe_codes from './../countries/map_codes.json';
import { ICCS_Category } from '../models/ICCS_Category';
import { ComparationData } from '../models/ComparationData';
import { ComparationHistoData } from '../models/ComparationHistoData';
import { ProvaData } from '../models/ProvaData';


const EUROPE_NULL_COLOR = '#000000';
const COUNTRY_NULL_COLOR = '#004c7f';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  public data: any;
  public chartData: any;
  public europeChartData: any;

  constructor(private dataService: DataService) {
  }



  public buildHistogram(country: string, year: number, data: HistogramData[]) {
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

  public buildComparingHistogram(countries: any[]) {
    let str = '';
    let total_categories: string[] = [];
    for (let i = 0; i < countries.length; i++) {
      //caption sting
      str = str + countries[i].location + ', ';
      //array of unique categories
      countries[i].data.forEach(d => {
        total_categories.push(d.categoryName);
      });
    }
    //remove duplicates from categories
    total_categories = total_categories.filter((value, index, array) => index === array.indexOf(value));
    
    let categories: ICCS_Category[] = [];
    total_categories.forEach((category: string) => {
      categories.push(new ICCS_Category(category));
    })
    //build caption
    let caption = str.substring(0, str.length - 2) + ' in ' + countries[0].year;

    //build arrays of values for each country
    let values: ComparationHistoData[] = [];
    for (let i = 0; i < countries.length; i++) {
      //initialize the array of values setting the lenght and values to 0
      let country_values: ProvaData[] = [];
      for (let j = 0; j < total_categories.length; j++) {
        country_values.push(new ProvaData(0));
      }
      let data: ComparationData[] = countries[i].data;
      data.forEach((d: ComparationData) => {
        let cat_index = total_categories.indexOf(d.categoryName);
        if (cat_index > -1) {
          country_values[cat_index] = new ProvaData(d.value);
        }
      });
      values.push(new ComparationHistoData(countries[i].location, country_values));
    }

    let d = {
      chart: {
        caption: caption,
        xaxisname: "Crime",
        yaxisname: "Number",
        theme: "fusion"
      },
      categories: [
        {
          category: categories
        }
      ],
      dataset: values
    }
    console.log(d);
    return d;
  }




}
