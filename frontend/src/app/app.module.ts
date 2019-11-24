import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

//BELGIUM
import * as Belgium from "fusionmaps/maps/fusioncharts.belgium";
import * as Luxembourg from "fusionmaps/maps/fusioncharts.luxembourg";
import * as Namur from "fusionmaps/maps/fusioncharts.namur";
import * as Hainaut from "fusionmaps/maps/fusioncharts.hainaut";
import * as Liege from "fusionmaps/maps/fusioncharts.liege";
import * as BrabantWallon from "fusionmaps/maps/fusioncharts.walloonbrabant";
import * as Limburg from "fusionmaps/maps/fusioncharts.limburgbgomeenten";
import * as VlaamsBrabant from "fusionmaps/maps/fusioncharts.flemishbrabant";
import * as Brussels from "fusionmaps/maps/fusioncharts.brussels";
import * as OostVlaanderen from "fusionmaps/maps/fusioncharts.eastflanders";
import * as WestVlaanderen from "fusionmaps/maps/fusioncharts.westflanders";
import * as Antwerpen from "fusionmaps/maps/fusioncharts.antwerp";

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

//FINLAND
import * as Finalnd from 'fusionmaps/maps/fusioncharts.finland';

//FRANCE
import * as France from "fusionmaps/maps/fusioncharts.france2016";
import * as Corsica from "fusionmaps/maps/fusioncharts.corsica";
import * as Réunion from "fusionmaps/maps/fusioncharts.reunion";
import * as Mayotte from "fusionmaps/maps/fusioncharts.mayotte";
import * as FrenchGuiana from "fusionmaps/maps/fusioncharts.frenchguiana";
import * as Martinique from "fusionmaps/maps/fusioncharts.martinique";
import * as Guadeloupe from "fusionmaps/maps/fusioncharts.guadeloupe";
import * as PACA from "fusionmaps/maps/fusioncharts.provencealpescotedazur";
import * as Occitania from "fusionmaps/maps/fusioncharts.occitanie";
import * as NouvelleAquitaine from "fusionmaps/maps/fusioncharts.nouvelleaquitaine";
import * as AuvergneRhoneAlpes from "fusionmaps/maps/fusioncharts.auvergnerhonealpes";
import * as BourgogneFrancheComté from "fusionmaps/maps/fusioncharts.bourgognefranchecomte";
import * as CentreValdeLoire from "fusionmaps/maps/fusioncharts.centrevaldeloire";
import * as PaysdelaLoire from "fusionmaps/maps/fusioncharts.paysdelaloire";
import * as Brittany from "fusionmaps/maps/fusioncharts.brittany";
import * as GrandEst from "fusionmaps/maps/fusioncharts.grandest";
import * as HautsdeFrance from "fusionmaps/maps/fusioncharts.hautsdefrance";
import * as Normandy from "fusionmaps/maps/fusioncharts.normandy";

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

//POLAND
import * as Poland from 'fusionmaps/maps/fusioncharts.poland';
import * as Podkarpackie from 'fusionmaps/maps/fusioncharts.podkarpackie';
import * as Małopolskie from 'fusionmaps/maps/fusioncharts.malopolskie';
import * as Śląskie from 'fusionmaps/maps/fusioncharts.slaskie';
import * as Opolskie from 'fusionmaps/maps/fusioncharts.opolskie';
import * as Dolnośląskie from 'fusionmaps/maps/fusioncharts.dolnoslaskie';
import * as Lubelskie from 'fusionmaps/maps/fusioncharts.lubelskie';
import * as Świętokrzyskie from 'fusionmaps/maps/fusioncharts.swietokrzyskie';
import *  as Mazowieckie from 'fusionmaps/maps/fusioncharts.mazowieckie';
import * as Lódzkie from 'fusionmaps/maps/fusioncharts.lodzkie';
import * as Wielkopolskie from 'fusionmaps/maps/fusioncharts.wielkopolskie';
import * as Lubuskie from 'fusionmaps/maps/fusioncharts.lubuskie';
import * as KujawskoPomorskie from 'fusionmaps/maps/fusioncharts.kujawskopomorskie';
import * as Podlaskie from 'fusionmaps/maps/fusioncharts.podlaskie';
import *  as WarmińskoMazurskie from 'fusionmaps/maps/fusioncharts.warminskomazurskie';
import * as Pomorskie from 'fusionmaps/maps/fusioncharts.pomorskie';
import * as Zachodniopomorskie from 'fusionmaps/maps/fusioncharts.zachodniopomorskie';

//SPAIN
import * as Spain from "fusionmaps/maps/fusioncharts.spain";
import * as BalearicIslands from "fusionmaps/maps/fusioncharts.balearicislands";
import * as CanaryIslands from "fusionmaps/maps/fusioncharts.canaryislands";
import * as RegionofMurcia from "fusionmaps/maps/fusioncharts.regionofmurcia";
import * as Andalusia from "fusionmaps/maps/fusioncharts.andalusia";
import * as ValencianCommunity from "fusionmaps/maps/fusioncharts.valenciancommunity";
import * as CastillaLaMancha from "fusionmaps/maps/fusioncharts.castillalamancha";
import * as Extremadura from "fusionmaps/maps/fusioncharts.extremadura";
import * as CommunityofMadrid from "fusionmaps/maps/fusioncharts.communityofmadrid";
import * as Catalonia from "fusionmaps/maps/fusioncharts.catalonia";
import * as Aragon from "fusionmaps/maps/fusioncharts.aragon";
import * as Castileandleon from "fusionmaps/maps/fusioncharts.castileandleon";
import * as Navarre from "fusionmaps/maps/fusioncharts.navarre";
import * as LaRioja from "fusionmaps/maps/fusioncharts.larioja";
import * as BasqueCountry from "fusionmaps/maps/fusioncharts.basquecountry";
import * as Cantabria from "fusionmaps/maps/fusioncharts.cantabria";
import * as Asturias from "fusionmaps/maps/fusioncharts.asturias";
import * as Galicia from "fusionmaps/maps/fusioncharts.galicia";

// Add dependencies for FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Maps, Europe, 
  Belgium, Luxembourg, Namur, Hainaut, Liege, BrabantWallon, Limburg, VlaamsBrabant, Brussels, OostVlaanderen, WestVlaanderen, Antwerpen,
  Italy, Abruzzo, Basilicata, Calabria, Campania, EmiliaRomagna, FriuliVeneziaGiulia, Lazio, Liguria, Lombardia, Marche, Molise, Piemonte, Puglia, Sardegna, Sicilia, TrentinoAltoAdige, Toscana, Umbria, Veneto, ValleDAosta,
  Finalnd,
  France, Corsica, Réunion, Mayotte, FrenchGuiana, Martinique, Guadeloupe, PACA, Occitania, NouvelleAquitaine, AuvergneRhoneAlpes, BourgogneFrancheComté, CentreValdeLoire, PaysdelaLoire, Brittany, GrandEst, HautsdeFrance, Normandy,
  Germany, BadenWuerttemberg, Bavaria, Saarland, RhinelandPalatinate, Hesse, Thueringen, Sachsen, SaxonyAnhalt, Brandenburg, Berlin, MecklenburgVorpommern, SchleswigHolstein, LowerSaxony, NorthRhineWestphalia,
  Spain, BalearicIslands, CanaryIslands, RegionofMurcia, Andalusia, ValencianCommunity, CastillaLaMancha, Extremadura, CommunityofMadrid, Catalonia, Aragon, Castileandleon, Navarre, LaRioja, BasqueCountry, Cantabria, Asturias, Galicia,
  Poland, Podkarpackie, Małopolskie, Śląskie, Opolskie, Dolnośląskie, Lubelskie, Świętokrzyskie, Mazowieckie, Lódzkie, Wielkopolskie, Lubuskie, KujawskoPomorskie, Podlaskie, WarmińskoMazurskie, Pomorskie, Zachodniopomorskie,
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
