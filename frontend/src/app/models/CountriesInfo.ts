import { CountryInfo } from './CountryInfo.js';
import * as italy from './../countries/italy.json';
import * as france from './../countries/france.json';
import * as netherlands from './../countries/netherlands.json';
import * as denmark from './../countries/denmark.json';
import * as portugal from './../countries/portugal.json';
import * as bulgaria from './../countries/bulgaria.json';
import * as cyprus from './../countries/cyprus.json';
import * as czechrepublic from './../countries/czechrepublic.json';
import * as hungary from './../countries/hungary.json';
import * as luxembourg from './../countries/luxembourg.json';
import * as austria from './../countries/austria.json';
const COUNTRIES = [
  italy,
  france,
  netherlands,
  denmark,
  portugal,
  bulgaria,
  cyprus,
  czechrepublic,
  hungary,
  luxembourg,
  austria
];

const dictionary: { [name: string]: string } = {};

for (let i = 0; i < COUNTRIES.length; i++) {
  let country: any = COUNTRIES[i];
  country = country.default;
  for (let j = 0; j < country.length; j++) {
    dictionary[country[j].name] = country[j].chart_name;
  }
}

export default dictionary;
