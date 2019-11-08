import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from "fusioncharts/fusioncharts.maps";
import * as Maps from 'fusioncharts/fusioncharts.maps';
import * as World from 'fusioncharts/maps/fusioncharts.world';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// MAPS IMPORTS

//EUROPE
import * as Europe from "fusionmaps/maps/fusioncharts.europe";

//ITALY
import * as Italy from "fusionmaps/maps/fusioncharts.italy";
import * as Abruzzo from "fusionmaps/maps/fusioncharts.abruzzo";
import * as Basilicata from "fusionmaps/maps/fusioncharts.basilicata";
import * as Calabria from "fusionmaps/maps/fusioncharts.calabria";
import * as Campania from "fusionmaps/maps/fusioncharts.campania";
import * as EmiliaRomagna from "fusionmaps/maps/fusioncharts.emiliaromagna";
import * as FriuliVeneziaGiulia from "fusionmaps/maps/fusioncharts.friuliveneziagiulia";
import * as Lazio from "fusionmaps/maps/fusioncharts.lazio";
import * as Liguria from "fusionmaps/maps/fusioncharts.liguria";
import * as Lombardia from "fusionmaps/maps/fusioncharts.lombardy";
import * as Marche from "fusionmaps/maps/fusioncharts.marche";
import * as Molise from "fusionmaps/maps/fusioncharts.molise";
import * as Piemonte from "fusionmaps/maps/fusioncharts.piedmont";
import * as Puglia from "fusionmaps/maps/fusioncharts.apulia";
import * as Sardegna from "fusionmaps/maps/fusioncharts.sardinia";
import * as Sicilia from "fusionmaps/maps/fusioncharts.sicily";
import * as TrentinoAltoAdige from "fusionmaps/maps/fusioncharts.trentinoaltoadige";
import * as Toscana from "fusionmaps/maps/fusioncharts.tuscany";
import * as Umbria from "fusionmaps/maps/fusioncharts.umbria";
import * as Veneto from "fusionmaps/maps/fusioncharts.veneto";
import * as ValleDAosta from "fusionmaps/maps/fusioncharts.valledaosta";

//FRANCE
import * as France from "fusionmaps/maps/fusioncharts.france";

//GERMANY
import * as Germany from "fusionmaps/maps/fusioncharts.germany";
import * as BadenWuerttemberg from 'fusionmaps/maps/fusioncharts.badenwurttemberg';
import * as Bavaria from 'fusionmaps/maps/fusioncharts.bavaria';
import * as Saarland from 'fusionmaps/maps/fusioncharts.saarland';
import * as RhinelandPalatinate from 'fusionmaps/maps/fusioncharts.rhinelandpalatinate';
import * as Hesse from 'fusionmaps/maps/fusioncharts.hesse';
import * as Thueringen from 'fusionmaps/maps/fusioncharts.thuringia';
import * as Sachsen from 'fusionmaps/maps/fusioncharts.saxony';
import * as SaxonyAnhalt from 'fusionmaps/maps/fusioncharts.sachsenanhalt';
import * as Brandenburg from 'fusionmaps/maps/fusioncharts.brandenburg';
import * as Berlin from 'fusionmaps/maps/fusioncharts.berlin';
import * as MecklenburgVorpommern from 'fusionmaps/maps/fusioncharts.mecklenburgvorpommern';
import * as SchleswigHolstein from 'fusionmaps/maps/fusioncharts.schleswigholstein';
import * as LowerSaxony from 'fusionmaps/maps/fusioncharts.lowersaxony';
import * as NorthRhineWestphalia from 'fusionmaps/maps/fusioncharts.northrhinewestphalia';
//SPAIN
import * as Spain from "fusionmaps/maps/fusioncharts.spain";

// Add dependencies for FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Maps, Europe, 
  Italy, Abruzzo, Basilicata, Calabria, Campania, EmiliaRomagna, FriuliVeneziaGiulia, Lazio, Liguria, Lombardia, Marche, Molise, Piemonte, Puglia, Sardegna, Sicilia, TrentinoAltoAdige, Toscana, Umbria, Veneto, ValleDAosta,
  France,
  Germany, BadenWuerttemberg, Bavaria, Saarland, RhinelandPalatinate, Hesse, Thueringen, Sachsen, SaxonyAnhalt, Brandenburg, Berlin, MecklenburgVorpommern, SchleswigHolstein, LowerSaxony, NorthRhineWestphalia,
  Spain,
  World,
  FusionTheme)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
