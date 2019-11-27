import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

  public years: number[] = [];
  public selectedYear: number = null;
  public width = window.innerWidth;
  public height = window.innerHeight;
  public dataSource: any = null;
  public dataFormar = "json";
  public type = "column2d";

  constructor(private dataService: DataService, private mapService: MapService) { }

  ngOnInit() {
    this.years = this.dataService.getAvailableYearsFromCountry(this.dataService.selectedRegion);
  }

  public load(){
    if(this.selectedYear != null){
      let data = this.dataService.getData(this.dataService.selectedRegion, this.selectedYear);
      this.dataSource = this.mapService.buildHistogram(this.dataService.selectedRegion, this.selectedYear, data);
      console.log(this.dataSource)
    }
    else{
      alert("You must choose a year.");
    }
  }
}
