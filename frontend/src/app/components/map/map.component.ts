import { Component, OnInit, NgZone } from '@angular/core';
import { MapService } from './../../services/map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public data: any;
  public width: number = 1200;
  public height: number = 800;
  public type: string = "europe";
  public dataFormat: string = "json";
  public dataSource: string = this.data;
  public previousCountries: string[] = [];

  constructor(private zone: NgZone, private mapService: MapService){
    this.data = this.mapService.getMap();
  }

  ngOnInit() {
  }

  public update($event: any) {
    //push current country in previousCountries list
    this.previousCountries.push(this.type);
    //have to add zone, otherwise view will not be updated
    this.zone.run(() => {
      //label refers to country name
      this.type = this.mapService.getMapByName($event.dataObj.label);
      console.log($event)
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
