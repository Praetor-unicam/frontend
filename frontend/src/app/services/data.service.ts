import { Injectable } from '@angular/core';

const years: number[] = [2017, 2018, 2019]
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
}
