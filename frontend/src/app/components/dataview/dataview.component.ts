import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartService } from 'src/app/services/chart.service';
import { Crime } from 'src/app/models/Crime';
import { HistogramData } from 'src/app/models/HistogramData';
import { SelectionService } from 'src/app/services/selection.service';


@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

  public years: number[] = [];
  public charts: string[] = ['Histogram', 'Pie Chart'];
  public selectedYear: number = null;
  public selectedChart: string;
  public width: number;
  public height: number;
  public dataSource: any = null;
  public dataFormar = "json";
  public type = "column2d";

  constructor(private dataService: DataService, private chartService: ChartService, private selectionService: SelectionService) { }

  ngOnInit() {
    /*
    this.dataService.getAvailableYearsFromCountry(this.dataService.selectedRegion)
      .subscribe((years: number[]) => {
        this.years = years;
      })
      */
    this.years = this.dataService.getAvailableYearsFromCountry(this.selectionService.selectedCountry);
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
      /*
      let data: Crime[] = this.dataService.getData(this.dataService.selectedRegion, this.selectedYear);
      */
      let data: Crime[];
      /*
      this.dataService.getData(this.selectionService.selectedPath, this.selectedYear)
        .subscribe((crimes: Crime[]) => {
          data = crimes;
          let histoData: HistogramData[] = [];
          data.forEach((crime: Crime) => {
            histoData.push(new HistogramData(crime.name, crime.n_crimes));
          })
          this.changeType();
          this.dataSource = this.chartService.buildHistogram(this.selectionService.selectedPath[this.selectionService.selectedPath.length - 1], this.selectedYear, histoData);
        })
        */
      data = this.dataService.getData(this.selectionService.selectedCountry, this.selectedYear);
      let histoData: HistogramData[] = [];
      data.forEach((crime: Crime) => {
        histoData.push(new HistogramData(crime.name, crime.n_crimes));
      })
      this.changeType();
      this.dataSource = this.chartService.buildHistogram(this.selectionService.selectedCountry, this.selectedYear, histoData);
       
      
    }
    else{
      alert("You must choose a year.");
    }
  }

  public changeType(){
    if(this.selectedChart == 'Histogram'){
      this.type = 'column2d';
    }
    if(this.selectedChart == 'Pie Chart'){
      this.type = 'pie3d';
    }
  }
}
