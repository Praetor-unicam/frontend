import { Injectable } from '@angular/core';
import { CountryData } from '../models/CountryData';
import { YearData } from '../models/YearData';
import { Crime } from '../models/Crime';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const data: CountryData = {
  country: 'Luxembourg',
  year_data: [
    {
      year: 2017,
      crimes: [
        {
          crime: 'Offences against goods',
          value: 3584
        },
        {
          crime: 'Burglaries',
          value: 785
        },
        {
          crime: 'Drug cases',
          value: 125
        }
      ]
    },
    {
      year: 2018,
      crimes: [
        {
          crime: 'Offences against goods',
          value: 3584
        },
        {
          crime: 'Burglaries',
          value: 785
        },
        {
          crime: 'Drug cases',
          value: 125
        }
      ]
    }
  ]
}

const years: number[] = [2000, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  
  public getAvailableYearsFromCountry(country: string): number[]{
    return years;
  }
  
  /*
  public getData(country: string, year: number): Crime[]{
    let crimes: Crime[] = null;
    data.year_data.forEach((yearData: YearData) => {
      if(yearData.year == year){
        crimes = yearData.crimes;
      }
    })
    return crimes;
  }

  */
  public getAvailableCountries(): string[]{
    return ['Luxembourg', 'Cyprus', 'Italy'];
  }

  public getData(country_id: string, year: number): Observable<Crime[]>{
      return this.http.get<Crime[]>('api/data/' + country_id.substring(0,2) + '/' + year + '/' + country_id);
  }

  /*
  public getAvailableYearsFromCountry(country: string): Observable<number[]>{
    return this.http.get<number[]>('api/years/' + country);
  }
  */

}
