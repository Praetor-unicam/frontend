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
  Italy, Abruzzo, Basilicata, Calabria, Campania, EmiliaRomagna, FriuliVeneziaGiulia, Lazio, Liguria, Lombardia, Marche, Molise, Piemonte, Puglia, Sardegna, Sicilia, TrentinoAltoAdige, Toscana, Umbria, Veneto, ValleDAosta,
  Finalnd,
  France, Corsica, Réunion, Mayotte, FrenchGuiana, Martinique, Guadeloupe, PACA, Occitania, NouvelleAquitaine, AuvergneRhoneAlpes, BourgogneFrancheComté, CentreValdeLoire, PaysdelaLoire, Brittany, GrandEst, HautsdeFrance, Normandy,
  Germany, BadenWuerttemberg, Bavaria, Saarland, RhinelandPalatinate, Hesse, Thueringen, Sachsen, SaxonyAnhalt, Brandenburg, Berlin, MecklenburgVorpommern, SchleswigHolstein, LowerSaxony, NorthRhineWestphalia,
  Spain, BalearicIslands, CanaryIslands, RegionofMurcia, Andalusia, ValencianCommunity, CastillaLaMancha, Extremadura, CommunityofMadrid, Catalonia, Aragon, Castileandleon, Navarre, LaRioja, BasqueCountry, Cantabria, Asturias, Galicia,
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
