import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public data: any;
  public width: number;
  public height: number;
  public current_map_name: string = "europe";
  public current_label: string = "Europe";
  public map_path: string[] = [];
  public dataFormat: string = "json";
  public dataSource: string = this.data;
  public previousCountries: string[] = [];

  constructor(private zone: NgZone, private chartService: ChartService, private router: Router, private dataService: DataService){
    this.data = this.chartService.getMap();
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
      //get new map 
      let new_map = this.chartService.getMapByName(this.current_label);
      //add country label to map_path in order to send it via API call
      this.map_path.push(this.current_label);

      if(new_map != null && new_map != ""){
        this.current_map_name = new_map;
      }
      else{
        if(this.current_map_name == 'europe' || new_map === ""){
          alert("The map for this region is not available");
          this.map_path.pop();
        }
        else{
          this.select();
        }
      }
    })
  };

  public back(){
    //pop country from previousContries list and change current country
    if(this.previousCountries.length != 0){
      let country = this.previousCountries.pop();
      this.map_path.pop();
      this.current_map_name = country;
    }
  }

  public select(){
    console.log(this.map_path);
    alert("Selecting region " + this.map_path);
    this.dataService.selectRegion(this.map_path);
    this.router.navigate(['/dataview']);
  }
}
