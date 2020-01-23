import { Component, OnInit, NgZone, HostListener, AfterViewInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { SelectionService } from 'src/app/services/selection.service';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  public map: L.Map;
  public currentLayer;
  public zoomLevel: number = 4;
  public states: any;
  public previousMaps: any[] = [];
  public currentLatLng: L.LatLngExpression = [ 50.1022233, 9.2544194 ];
  public currentID: string = 'EU';
  public currentLabel: string = 'Europe';

  constructor(private zone: NgZone, private mapService: MapService, private router: Router, private selectionService: SelectionService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.getMapByID(this.currentID)
      .subscribe((states: any) => {
        this.states = states;
        this.initStatesLayer();
      })
  }

  ngOnInit(){

  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.currentLatLng,
      zoom: this.zoomLevel
    });
    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { maxZoom: 18, attribution: '...' });
    
    tiles.addTo(this.map);
    
  }

  private initStatesLayer() {
    let ids = [];
    this.states.features.forEach((feature: any) => {
      if(feature.properties.NUTS_ID != null){
        ids.push(feature.properties.NUTS_ID);
      }
      else{
        ids.push(feature.properties.GISCO_ID);
      }
    });
    this.mapService.getAvailableMaps(this.currentID, ids)
      .subscribe((result: any[]) => {
        result.forEach((r: any) => {
          let index = this.states.features.findIndex(x => x.properties.NUTS_ID === r.NUTS || x.properties.GISCO_ID === r.NUTS);
          this.states.features[index].properties.available = r.available;
        });

        this.currentLayer = L.geoJSON(this.states, {
          style: (feature) => ({
            weight: 3,
            opacity: 0.5,
            color: '#0000ff',
            fillOpacity: 0.5,
            fillColor: this.getColor(feature.properties.available)
          }),
          onEachFeature: (feature, layer) => (
            layer.on({
              mouseover: (e) => {this.highlightFeature(e); layer.openPopup();},
              mouseout: (e) => {this.resetFeature(e); layer.closePopup();},
              click: (e) => {
                if(this.currentID.length < 5){
                  //create prvious map object
                  let prevMap = {id: this.currentID, label: this.currentLabel, latlng: this.currentLatLng};
                  this.previousMaps.push(prevMap);
                  this.zoomLevel += 1;
                  this.currentLatLng = L.latLng(e.latlng);
                  this.map.flyTo(this.currentLatLng, this.zoomLevel);
                  let id: string = feature.id || feature.properties.id;
                  this.currentID = id;
                  this.currentLabel = feature.properties.NUTS_NAME;
                  this.navigateToNextLayer(this.currentID);
                }
                else{
                  this.currentID = feature.properties.GISCO_ID;
                  this.currentLabel = feature.properties.LAU_LABEL;
                }
              }
            })
            .bindPopup(feature.properties.NUTS_NAME || feature.properties.LAU_LABEL, { closeButton: false })
          )
        });
        this.map.addLayer(this.currentLayer);
      },
      error => {
        alert("There was an error getting the availability of data.");
      });
  }

  private highlightFeature(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 6,
      opacity: 1.0,
      color: '#ff8000',
      fillOpacity: 1.0,
      fillColor: '#ff6600',
    });
  }

  private resetFeature(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#0000ff',
      fillOpacity: 0.5,
      fillColor: '#0066ff'
    });
  }

  private getColor(available: boolean){
    console.log(available);
    let color;
    if(available){
      color = '#0066ff';
    }
    else{
      color = '#000000';
    }
    return color;
  }

  private navigateToNextLayer(id: string){
    this.mapService.getMapByID(id)
      .subscribe((states: any) => {
        //this.states = states;
        this.states = states[0];
        this.map.removeLayer(this.currentLayer);
        this.initStatesLayer();
      })
  }

  private navigateToPreviousLayer(){
    let prevMap = this.previousMaps.pop();
    this.zoomLevel -= 1;
    this.currentLatLng = prevMap.latlng;
    this.map.flyTo(this.currentLatLng, this.zoomLevel);
    this.currentID = prevMap.id;
    this.currentLabel = prevMap.label;
    this.navigateToNextLayer(this.currentID);
  }

  public select(){
    alert("Selecting region " + this.currentID);
    this.selectionService.selectMapCountry(this.currentID, this.currentLabel);
    this.router.navigate(['/dataview']);
  }


}
