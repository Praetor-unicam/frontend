import { Injectable } from '@angular/core';

const data = {
  2017: [
    {
      'label': 'Total',
      'value': 3584
    },
    {
      'label': 'Offences against goods',
      'value': 1523
    },{
      'label': 'Burglaries',
      'value': 785
    },{
      'label': 'Drug cases',
      'value': 125
    },
  ],
  2018: [
    {
      'label': 'Total',
      'value': 3584
    },
    {
      'label': 'Offences against goods',
      'value': 1523
    },{
      'label': 'Burglaries',
      'value': 785
    },{
      'label': 'Drug cases',
      'value': 125
    },
  ],
  2019: [
    {
      'label': 'Total',
      'value': 3584
    },
    {
      'label': 'Offences against goods',
      'value': 1523
    },{
      'label': 'Burglaries',
      'value': 785
    },{
      'label': 'Drug cases',
      'value': 125
    },
  ]
}

const years: number[] = [2017, 2018, 2019];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public selectedRegion: string;

  constructor() { }

  public getAvailableYearsFromCountry(country: string): number[]{
    return years;
  }

  public selectRegion(region: string){
    this.selectedRegion = region;
  }

  public getData(country: string, year: number){
    return data[year];
  }
}
