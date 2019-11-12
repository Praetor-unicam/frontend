import { CountryInfo } from './CountryInfo.js';
import * as italy from "./../countries/italy.json";
import * as france from './../countries/france.json';
import * as germany from './../countries/germany.json';
import * as finland from './../countries/finland.json';
import * as spain from './../countries/spain.json';
import * as belgium from './../countries/belgium.json';

const COUNTRIES = [italy, finland, france, germany, spain, belgium];

let dictionary: {[name: string]: string} = {}

for(let i = 0; i < COUNTRIES.length; i++){
    let country: any = COUNTRIES[i];
    country = country.default;
    for(let j = 0; j < country.length; j++){
        dictionary[country[j].name] = country[j].chart_name
    }
}

export default dictionary;