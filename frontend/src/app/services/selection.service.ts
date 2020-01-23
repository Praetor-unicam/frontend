import { Injectable } from '@angular/core';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  public countriesForAnalysis: Country[] = [];
  
  public selectedUploadCountry: string;
  public selectedAnalysis: string;

  constructor() { }

  public selectMapCountry(country_id: string, country_label: string){
    this.countriesForAnalysis.push(new Country(country_label, country_id));
  }

  public removeMapCountry(country: Country){
    const index = this.countriesForAnalysis.indexOf(country, 0);
    if (index > -1) {
      this.countriesForAnalysis.splice(index, 1);
    }
  }

  public selectUploadCountry(country: string){
    this.selectedUploadCountry = country;
  }

  public selectAnalysisType(type: string){
    this.selectedAnalysis = type;
  }
}
