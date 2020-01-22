import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  public selectedCountry: string;
  public selectedAnalysis: string;

  constructor() { }

  public selectCountry(country: string){
    this.selectedCountry = country;
  }

  public selectAnalysisType(type: string){
    this.selectedAnalysis = type;
  }
}
