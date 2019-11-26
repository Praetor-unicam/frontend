import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { MapService } from './../../services/map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public data: any;
  public width: number = 1200;
  public height: number;
  public type: string = "europe";
  public dataFormat: string = "json";
  public dataSource: string = this.data;
  public previousCountries: string[] = [];

  constructor(private zone: NgZone, private mapService: MapService){
    this.data = this.mapService.getMap();
  }

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 100;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 100;
  }

  public update($event: any) {
    //push current country in previousCountries list
    this.previousCountries.push(this.type);
    //have to add zone, otherwise view will not be updated
    this.zone.run(() => {
      //label refers to country name
      let new_map = this.mapService.getMapByName($event.dataObj.label);
      if(new_map != null){
        this.type = new_map;
      }
      else{
        if(this.type == 'europe'){
          alert("The map for this region is not available");
        }
        else{
          alert("Selecting region...");
        }
      }
    })
  };

  public back(){
    //pop country from previousContries list and change current country
    if(this.previousCountries.length != 0){
      let country = this.previousCountries.pop();
      this.type = country;
    }
  }
}
