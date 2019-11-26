import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { MapService } from './../../services/map.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public data: any;
  public width: number = 1200;
  public height: number;
  public current_map_name: string = "europe";
  public current_label: string = "Europe"
  public dataFormat: string = "json";
  public dataSource: string = this.data;
  public previousCountries: string[] = [];

  constructor(private zone: NgZone, private mapService: MapService, private router: Router, private dataService: DataService){
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
    this.previousCountries.push(this.current_map_name);
    //have to add zone, otherwise view will not be updated
    this.zone.run(() => {
      //label refers to country name
      this.current_label = $event.dataObj.label;
      let new_map = this.mapService.getMapByName(this.current_label);
      if(new_map != null){
        this.current_map_name = new_map;
      }
      else{
        if(this.current_map_name == 'europe'){
          alert("The map for this region is not available");
        }
        else{
          this.select(this.current_label);
        }
      }
    })
  };

  public back(){
    //pop country from previousContries list and change current country
    if(this.previousCountries.length != 0){
      let country = this.previousCountries.pop();
      this.current_map_name = country;
    }
  }

  public select(region: string){
    alert("Selecting region " + region);
    this.dataService.selectRegion(region);
    this.router.navigate(['/dataview']);
  }
}
