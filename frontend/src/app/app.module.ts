import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as Maps from 'fusioncharts/fusioncharts.maps';
import * as World from 'fusioncharts/maps/fusioncharts.world';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// MAPS IMPORTS

//EUROPE
import * as Europe from "fusionmaps/maps/fusioncharts.europe";

//BELGIUM
import * as Belgium from "fusionmaps/maps/fusioncharts.belgium";
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
  
// NETHERLANDS
import * as Netherlands from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Drenthe from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Flevoland from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Friesland from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Gelderland from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Groningen from 'fusionmaps/maps/fusioncharts.netherlands';
import * as LimburgBgomeenten from 'fusionmaps/maps/fusioncharts.limburgbgomeenten';
import * as Noordbrabant from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Noordholland from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Overijssel from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Utrecht from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Zeeland from 'fusionmaps/maps/fusioncharts.netherlands';
import * as Zuidholland from 'fusionmaps/maps/fusioncharts.netherlands';

// DENMARK
import * as Denmark from 'fusionmaps/maps/fusioncharts.denmark';
import * as Bornholm from 'fusionmaps/maps/fusioncharts.denmark';
import * as Frederiksberg from 'fusionmaps/maps/fusioncharts.denmark';
import * as Frederiksborg from 'fusionmaps/maps/fusioncharts.denmark';
import * as Fyn from 'fusionmaps/maps/fusioncharts.fayoum';
import * as København from 'fusionmaps/maps/fusioncharts.denmark';
import * as Københavnsamt from 'fusionmaps/maps/fusioncharts.denmark';
import * as Nordjylland from 'fusionmaps/maps/fusioncharts.nordjylland';
import * as Ribe from 'fusionmaps/maps/fusioncharts.denmark';
import * as Ringkjøbing from 'fusionmaps/maps/fusioncharts.denmark';
import * as Roskilde from 'fusionmaps/maps/fusioncharts.denmark';
import * as Storstrøm from 'fusionmaps/maps/fusioncharts.denmark';
import * as Sønderjylland from 'fusionmaps/maps/fusioncharts.denmark';
import * as Vejle from 'fusionmaps/maps/fusioncharts.denmark';
import * as Vestsjælland from 'fusionmaps/maps/fusioncharts.denmark';
import * as Viborg from 'fusionmaps/maps/fusioncharts.denmark';
import * as Århus from 'fusionmaps/maps/fusioncharts.akershus';
// PORTUGAL
import * as Portugal from 'fusionmaps/maps/fusioncharts.portugal';
import * as Porto from 'fusionmaps/maps/fusioncharts.porto';
import * as Aveiro from 'fusionmaps/maps/fusioncharts.aveiro';
import * as Beja from 'fusionmaps/maps/fusioncharts.beja';
import * as Braga from 'fusionmaps/maps/fusioncharts.braga';
import * as Braganca from 'fusionmaps/maps/fusioncharts.braganca';
import * as Castelobranco from 'fusionmaps/maps/fusioncharts.castelobranco';
import * as Coimbra from 'fusionmaps/maps/fusioncharts.coimbra';
import * as Faro from 'fusionmaps/maps/fusioncharts.faro';
import * as Guarda from 'fusionmaps/maps/fusioncharts.guarda';
import * as Leiria from 'fusionmaps/maps/fusioncharts.loei';
import * as Lisboa from 'fusionmaps/maps/fusioncharts.lisboa';
import * as Portalegre from 'fusionmaps/maps/fusioncharts.portalegre';
import * as Santarem from 'fusionmaps/maps/fusioncharts.santarem';
import * as Setubal from 'fusionmaps/maps/fusioncharts.setubal';
import * as Vianadocastelo from 'fusionmaps/maps/fusioncharts.vianadocastelo';
import * as Villaclara from 'fusionmaps/maps/fusioncharts.villaclara';
import * as Viseu from 'fusionmaps/maps/fusioncharts.viseu';
import * as Evora from 'fusionmaps/maps/fusioncharts.evora';

// BULGARIA
import * as Bulgaria from 'fusionmaps/maps/fusioncharts.bulgaria';
import * as Blagoevgrad from 'fusionmaps/maps/fusioncharts.blagoevgrad';
import * as Dobrich from 'fusionmaps/maps/fusioncharts.dobrich';
import * as Burgas from 'fusionmaps/maps/fusioncharts.burgas';
import * as Gabrovo from 'fusionmaps/maps/fusioncharts.gabrovo';
import * as Gradsofiya from 'fusionmaps/maps/fusioncharts.gradsofia';
import * as Haskovo from 'fusionmaps/maps/fusioncharts.haskovo';
import * as Kurdzhali from 'fusionmaps/maps/fusioncharts.bulgaria';
import * as Kyustendil from 'fusionmaps/maps/fusioncharts.bulgaria';
import * as Lovech from 'fusionmaps/maps/fusioncharts.lovech';
import * as Montana from 'fusionmaps/maps/fusioncharts.montana';
import * as Pazardzhik from 'fusionmaps/maps/fusioncharts.pazardzhik';
import * as Pernik from 'fusionmaps/maps/fusioncharts.pernik';
import * as Pleven from 'fusionmaps/maps/fusioncharts.pleven';
import * as Plovdiv from 'fusionmaps/maps/fusioncharts.plovdiv';
import * as Razgrad from 'fusionmaps/maps/fusioncharts.razgrad';
import * as Ruse from 'fusionmaps/maps/fusioncharts.ruse';
import * as Shumen from 'fusionmaps/maps/fusioncharts.shumen';
import * as Silistra from 'fusionmaps/maps/fusioncharts.silistra';
import * as Sliven from 'fusionmaps/maps/fusioncharts.sliven';
import * as Smolyan from 'fusionmaps/maps/fusioncharts.smolyan';
import * as Sofiya from 'fusionmaps/maps/fusioncharts.sofia';
import * as Starazagora from 'fusionmaps/maps/fusioncharts.starazagora';
import * as Turgovishte from 'fusionmaps/maps/fusioncharts.bulgaria';
import * as Varna from 'fusionmaps/maps/fusioncharts.varna';
import * as Velikoturnovo from 'fusionmaps/maps/fusioncharts.velikotarnovo';
import * as Vidin from 'fusionmaps/maps/fusioncharts.vidin';
import * as Vratsa from 'fusionmaps/maps/fusioncharts.vratsa';
import * as Yambol from 'fusionmaps/maps/fusioncharts.yambol';

// CYPRUS
import * as Cyprus from 'fusionmaps/maps/fusioncharts.cyprus';
import * as Famagusta from 'fusionmaps/maps/fusioncharts.cyprus';
import * as Kyrenia from 'fusionmaps/maps/fusioncharts.cyprus';
import * as Larnaca from 'fusionmaps/maps/fusioncharts.cyprus';
import * as Limassol from 'fusionmaps/maps/fusioncharts.cyprus';
import * as Nicosia from 'fusionmaps/maps/fusioncharts.cyprus';
import * as Paphos from 'fusionmaps/maps/fusioncharts.cyprus';

// CZECH REPUBLIC
import * as Czechrepublic from 'fusionmaps/maps/fusioncharts.czechrepublic';
import * as Jihoeský from 'fusionmaps/maps/fusioncharts.czechrepublic';
import * as Jihomoravský from 'fusionmaps/maps/fusioncharts.czechrepublic';
import * as Karlovarský from 'fusionmaps/maps/fusioncharts.czechrepublic';
import * as Královéhradecký from 'fusionmaps/maps/fusioncharts.hradeckralove';
import * as Liberecký from 'fusionmaps/maps/fusioncharts.liberec';
import * as Moravskoslezský from 'fusionmaps/maps/fusioncharts.moraviasilesia';
import * as Olomoucký from 'fusionmaps/maps/fusioncharts.olomoucregion';
import * as Pardubický from 'fusionmaps/maps/fusioncharts.pardubiceregion';
import * as Plzeňský from 'fusionmaps/maps/fusioncharts.plzenregion';
import * as Praha from 'fusionmaps/maps/fusioncharts.prague';
import * as Středoeský from 'fusionmaps/maps/fusioncharts.czechrepublic';
import * as Vysoina from 'fusionmaps/maps/fusioncharts.vysocina';
import * as Zlínský from 'fusionmaps/maps/fusioncharts.zlin';
import * as Ústecký from 'fusionmaps/maps/fusioncharts.czechrepublic';

// HUNGARY
import * as Hungary from 'fusionmaps/maps/fusioncharts.hungary';
import * as Baranya from 'fusionmaps/maps/fusioncharts.hungary';
import * as Borsodabaujzemplen from 'fusionmaps/maps/fusioncharts.hungary';
import * as Budapest from 'fusionmaps/maps/fusioncharts.hungary';
import * as Bacskiskun from 'fusionmaps/maps/fusioncharts.hungary';
import * as Bekes from 'fusionmaps/maps/fusioncharts.hungary';
import * as Csongrad from 'fusionmaps/maps/fusioncharts.hungary';
import * as Fejer from 'fusionmaps/maps/fusioncharts.hungary';
import * as Gyormosonsopron from 'fusionmaps/maps/fusioncharts.hungary';
import * as Hajdubihar from 'fusionmaps/maps/fusioncharts.hungary';
import * as Heves from 'fusionmaps/maps/fusioncharts.hungary';
import * as Jasznagykunszolnok from 'fusionmaps/maps/fusioncharts.hungary';
import * as Komaromesztergom from 'fusionmaps/maps/fusioncharts.hungary';
import * as Nograd from 'fusionmaps/maps/fusioncharts.hungary';
import * as Pest from 'fusionmaps/maps/fusioncharts.hungary';
import * as Somogy from 'fusionmaps/maps/fusioncharts.hungary';
import * as Szabolcsszatmarbereg from 'fusionmaps/maps/fusioncharts.hungary';
import * as Tolna from 'fusionmaps/maps/fusioncharts.hungary';
import * as Vas from 'fusionmaps/maps/fusioncharts.hungary';
import * as Veszprém from 'fusionmaps/maps/fusioncharts.hungary';
import * as Zala from 'fusionmaps/maps/fusioncharts.hungary';

// LUXEMBOURG
import * as Luxembourg from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Capellen from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Clervaux from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Diekirch from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Echternach from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Eschsuralzette from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Grevenmacher from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Mersch from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Redange from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Remich from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Vianden from 'fusionmaps/maps/fusioncharts.luxembourg';
import * as Wiltz from 'fusionmaps/maps/fusioncharts.luxembourg';

// AUSTRIA
import * as Austria from 'fusionmaps/maps/fusioncharts.austria';
import * as Burgenland from 'fusionmaps/maps/fusioncharts.burgenland';
import * as Kärnten from 'fusionmaps/maps/fusioncharts.austria';
import * as Niederösterreich from 'fusionmaps/maps/fusioncharts.niederosterreich';
import * as Oberösterreich from 'fusionmaps/maps/fusioncharts.oberosterreich';
import * as Salzburg from 'fusionmaps/maps/fusioncharts.salzburg';
import * as Steiermark from 'fusionmaps/maps/fusioncharts.steiermark';
import * as Tirol from 'fusionmaps/maps/fusioncharts.tirol';
import * as Vorarlberg from 'fusionmaps/maps/fusioncharts.vorarlberg';
import * as Wien from 'fusionmaps/maps/fusioncharts.wien';

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
import { MapComponent } from './components/map/map.component';

// Add dependencies for FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Maps, Europe, 
  Belgium, Luxembourg, Namur, Hainaut, Liege, BrabantWallon, Limburg, VlaamsBrabant, Brussels, OostVlaanderen, WestVlaanderen, Antwerpen,
  Italy, Abruzzo, Basilicata, Calabria, Campania, EmiliaRomagna, FriuliVeneziaGiulia, Lazio, Liguria, Lombardia, Marche, Molise, Piemonte, Puglia, Sardegna, Sicilia, TrentinoAltoAdige, Toscana, Umbria, Veneto, ValleDAosta,
  Finalnd,
  France, Corsica, Réunion, Mayotte, FrenchGuiana, Martinique, Guadeloupe, PACA, Occitania, NouvelleAquitaine, AuvergneRhoneAlpes, BourgogneFrancheComté, CentreValdeLoire, PaysdelaLoire, Brittany, GrandEst, HautsdeFrance, Normandy,
  Germany, BadenWuerttemberg, Bavaria, Saarland, RhinelandPalatinate, Hesse, Thueringen, Sachsen, SaxonyAnhalt, Brandenburg, Berlin, MecklenburgVorpommern, SchleswigHolstein, LowerSaxony, NorthRhineWestphalia,
  Spain, BalearicIslands, CanaryIslands, RegionofMurcia, Andalusia, ValencianCommunity, CastillaLaMancha, Extremadura, CommunityofMadrid, Catalonia, Aragon, Castileandleon, Navarre, LaRioja, BasqueCountry, Cantabria, Asturias, Galicia,
  Poland, Podkarpackie, Małopolskie, Śląskie, Opolskie, Dolnośląskie, Lubelskie, Świętokrzyskie, Mazowieckie, Lódzkie, Wielkopolskie, Lubuskie, KujawskoPomorskie, Podlaskie, WarmińskoMazurskie, Pomorskie, Zachodniopomorskie,
  Netherlands,
  Drenthe,
  Flevoland,
  Friesland,
  Gelderland,
  Groningen,
  LimburgBgomeenten,
  Noordbrabant,
  Noordholland,
  Overijssel,
  Utrecht,
  Zeeland,
  Zuidholland,

  Denmark,
  Bornholm,
  Frederiksberg,
  Frederiksborg,
  Fyn,
  København,
  Københavnsamt,
  Nordjylland,
  Ribe,
  Ringkjøbing,
  Roskilde,
  Storstrøm,
  Sønderjylland,
  Vestsjælland,
  Viborg,
  Vejle,
  Århus,

  Portugal,
  Porto,
  Aveiro,
  Beja,
  Braga,
  Braganca,
  Castelobranco,
  Coimbra,
  Faro,
  Guarda,
  Leiria,
  Lisboa,
  Portalegre,
  Santarem,
  Setubal,
  Vianadocastelo,
  Villaclara,
  Viseu,
  Evora,

  Bulgaria,
  Blagoevgrad,
  Burgas,
  Dobrich,
  Gabrovo,
  Gradsofiya,
  Haskovo,
  Kurdzhali,
  Kyustendil,
  Lovech,
  Montana,
  Pazardzhik,
  Pernik,
  Pleven,
  Plovdiv,
  Razgrad,
  Ruse,
  Shumen,
  Silistra,
  Sliven,
  Smolyan,
  Starazagora,
  Sofiya,
  Turgovishte,
  Varna,
  Velikoturnovo,
  Vratsa,
  Vidin,
  Yambol,

  Cyprus,
  Famagusta,
  Kyrenia,
  Larnaca,
  Limassol,
  Nicosia,
  Paphos,

  Czechrepublic,
  Jihoeský,
  Jihomoravský,
  Karlovarský,
  Královéhradecký,
  Liberecký,
  Moravskoslezský,
  Olomoucký,
  Pardubický,
  Plzeňský,
  Praha,
  Středoeský,
  Vysoina,
  Zlínský,
  Ústecký,

  Hungary,
  Baranya,
  Borsodabaujzemplen,
  Budapest,
  Bacskiskun,
  Bekes,
  Csongrad,
  Fejer,
  Gyormosonsopron,
  Hajdubihar,
  Heves,
  Jasznagykunszolnok,
  Komaromesztergom,
  Nograd,
  Pest,
  Somogy,
  Szabolcsszatmarbereg,
  Tolna,
  Vas,
  Veszprém,
  Zala,

  Luxembourg,
  Capellen,
  Clervaux,
  Diekirch,
  Echternach,
  Eschsuralzette,
  Grevenmacher,
  Mersch,
  Redange,
  Remich,
  Vianden,
  Wiltz,

  Austria, Burgenland, Kärnten,
  Niederösterreich,
  Oberösterreich,
  Salzburg,
  Steiermark,
  Tirol,
  Vorarlberg,
  Wien,
  World,
  FusionTheme);

  const appRoutes: Routes = [
    { path: 'home', component: MapComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
  ];

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [
    BrowserModule, 
    FusionChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
