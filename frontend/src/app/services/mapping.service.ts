import { Injectable } from '@angular/core';
import { Mapping } from '../models/Mapping';


const mappings: Mapping[] = [
  {category: 'Burglaries', ICCS_category: "Category 1"},
  {category: 'Thefts linked to vehicles', ICCS_category: "Category 2"},
  {category: 'Other thefts', ICCS_category: "Category 3"},
];

const ICCS_categories: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];

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
