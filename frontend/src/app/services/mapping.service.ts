import { Injectable } from '@angular/core';
import { Mapping } from '../models/Mapping';


const mappings: Mapping[] = [{category: "Burglaries", ICCS_category: "Burglary"},
{category: "Thefts linked to vehicles", ICCS_category: "Theft of a motorized vehicle or parts thereof"},
{ category: "Other thefts", ICCS_category: "Other acts of theft"},
{ category: "Cases of vandalism", ICCS_category: "Property damage"}, 
{ category: "Forgeries or falsifications (identitiy documents not included)", ICCS_category: "Forgery/counterfeiting"}];

const ICCS_categories: string[] = ["Burglary", "Theft of a motorized vehicle or parts thereof", "Other acts of theft", "Property damage", "Forgery/counterfeiting"];

@Injectable({
  providedIn: 'root'
})

export class MappingService {

  constructor() { }

  public getMappingFromCountry(country: string): Mapping[]{
    return mappings;
  }

  public getICCSCategories(): string[]{
    return ICCS_categories;
  }
}
