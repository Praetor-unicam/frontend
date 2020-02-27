import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import { MapComponent } from './components/map/map.component';
import { UploadComponent } from './components/upload/upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataviewComponent } from './components/dataview/dataview.component';
import { UploadMappingComponent } from './components/upload-mapping/upload-mapping.component';
import { ModifyMappingComponent } from './components/modify-mapping/modify-mapping.component';
import { HomeComponent } from './components/home/home.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

// Add dependencies for FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
const location = window.location.origin;

  const appRoutes: Routes = [
    { path: 'home', component: DataviewComponent },
    { path: 'map', component: MapComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'upload', component: UploadComponent },
    { path: 'dataview', component: DataviewComponent },
    { path: 'upload_mapping', component: UploadMappingComponent },
    { path: 'modify_mapping', component: ModifyMappingComponent },
    { path: 'upload_file', component: UploadFileComponent }
  ];

@NgModule({
  declarations: [AppComponent, MapComponent, UploadComponent, NavbarComponent, DataviewComponent, UploadMappingComponent, ModifyMappingComponent, HomeComponent, UploadFileComponent],
  imports: [
    BrowserModule, 
    FusionChartsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
