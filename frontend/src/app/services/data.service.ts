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

const years: number[] = [2000, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  
  public getAvailableYearsFromCountry(country: string): number[]{
    return years;
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

  public getAvailableCountries(): string[]{
    return ['Luxembourg', 'Cyprus', 'Italy'];
  }
  
  /*

  public getData(country_path: string[], year: number): Observable<Crime[]>{
    //check if country_path array is in the right format
    if(country_path[0] == null || country_path.length != 3){
      alert("Something went wrong during loading of data. Are you sure you specified everything?");
      return null;
    }
    else{
      //create url string
      let last_country: string = country_path[0];
      let url_string: string = country_path[0] + '/' + year;
      for(let i = 1; i < country_path.length; i++){
        if(country_path[i] != null){
          url_string = url_string + '/' + country_path[i];
          last_country = country_path[i];
        }
        else{
          url_string = url_string + '/' + last_country;
        }
      };
      return this.http.get<Crime[]>('api/data/' + url_string);
    }
  }
  */

  /*
  public getAvailableYearsFromCountry(country: string): Observable<number[]>{
    return this.http.get<number[]>('api/years/' + country);
  }
  */

}
