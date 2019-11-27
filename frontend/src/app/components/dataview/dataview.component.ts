import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

  public years: number[] = [];
  public selectedYear: number = null;
  public width: number;
  public height: number;
  public dataSource: any = null;
  public dataFormar = "json";
  public type = "column2d";

  constructor(private dataService: DataService, private chartService: ChartService) { }

  ngOnInit() {
    this.years = this.dataService.getAvailableYearsFromCountry(this.dataService.selectedRegion);
    this.width = window.innerWidth;
    this.height = window.innerHeight - 100;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 100;
  }

  public load(){
    if(this.selectedYear != null){
      let data = this.dataService.getData(this.dataService.selectedRegion, this.selectedYear);
      this.dataSource = this.chartService.buildHistogram(this.dataService.selectedRegion, this.selectedYear, data);
      console.log(this.dataSource)
    }
    else{
      alert("You must choose a year.");
    }
  }
}
