import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  public selectedCountry: string;
  public selectedPath: string[];

  constructor() { }

  public selectCountry(country: string){
    this.selectedCountry = country;
  }

  public selectRegion(map_path: string[]){
    this.selectedPath = map_path;
  }
}
