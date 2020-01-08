import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  public selectedCountry: string;

  constructor() { }

  public selectCountry(country: string){
    this.selectedCountry = country;
  }

}
