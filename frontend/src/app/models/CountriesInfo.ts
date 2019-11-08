import { CountryInfo } from './CountryInfo.js';
import * as italy from "./../countries/italy.json";
import * as france from './../countries/france.json';
import * as germany from './../countries/germany.json';

const COUNTRIES = [italy, france, germany];

let dictionary: {[name: string]: string} = {}

for(let i = 0; i < COUNTRIES.length; i++){
    let country: any = COUNTRIES[i];
    country = country.default;
    for(let j = 0; j < country.length; j++){
        dictionary[country[j].name] = country[j].chart_name
    }
}

export default dictionary;