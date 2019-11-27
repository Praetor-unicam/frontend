import { Injectable } from '@angular/core';
import { CountryData } from '../models/CountryData';
import { YearData } from '../models/YearData';
import { Crime } from '../models/Crime';

const data: CountryData = {
  country: 'Luxembourg',
  year_data: [
    {
      year: 2017,
      crimes: [
        {
          name: 'Offences against goods',
          n_crimes: 3584
        },
        {
          name: 'Burglaries',
          n_crimes: 785
        },
        {
          name: 'Drug cases',
          n_crimes: 125
        }
      ]
    },
    {
      year: 2018,
      crimes: [
        {
          name: 'Offences against goods',
          n_crimes: 3584
        },
        {
          name: 'Burglaries',
          n_crimes: 785
        },
        {
          name: 'Drug cases',
          n_crimes: 125
        }
      ]
    }
  ]
}

const years: number[] = [2017, 2018];

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

  public getData(country: string, year: number): Crime[]{
    let crimes: Crime[] = null;
    data.year_data.forEach((yearData: YearData) => {
      if(yearData.year == year){
        crimes = yearData.crimes;
      }
    })
    return crimes;
  }
}
