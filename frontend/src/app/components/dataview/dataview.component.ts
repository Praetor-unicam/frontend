import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartService } from 'src/app/services/chart.service';
import { Crime } from 'src/app/models/Crime';
import { HistogramData } from 'src/app/models/HistogramData';
import { SelectionService } from 'src/app/services/selection.service';
import { Country } from 'src/app/models/Country';
import { Router } from '@angular/router';


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
  public dataFormat = "json";
  public type = null;

  public countries: Country[] = [];

  constructor(private dataService: DataService, private chartService: ChartService, private selectionService: SelectionService, private router: Router) { }

  ngOnInit() {
    this.countries = this.selectionService.countriesForAnalysis;
    if(this.countries.length == 1){
      this.charts = ['Histogram', 'Pie Chart'];
    }
    else{
      this.charts = ['Histogram'];
    }
    this.countries.forEach((country: Country) => {
      this.dataService.getAvailableYearsFromCountry(country.id)
      .subscribe((years: number[]) => {
        years.forEach((year: number) => {
          if(!this.years.includes(year)){
            this.years.push(year);
            this.years = this.years.sort((n1, n2) => n1 - n2);
          }
        })
      },
      error => {
        alert("There was an error getting available years from the database for " + country.label + ". Please try again later.");
      })
    });
    //this.years = this.dataService.getAvailableYearsFromCountry(this.selectionService.selectedCountry);
    //this.years = [2017, 2018];
    this.width = window.innerWidth;
    this.height = window.innerHeight - 100;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 100;
  }

  public load(){
    if(this.selectedYear != null && this.selectedChart != null){
      if(this.countries.length == 1){
        this.dataService.getData(this.countries[0].id, this.selectedYear)
        .subscribe((data: Crime[]) => {
          let histoData: HistogramData[] = [];
          data.forEach((crime: Crime) => {
            if(crime.crime != 'total'){
              histoData.push(new HistogramData(crime.crime, crime.value));
            }
          })
          this.changeType();
          console.log(this.type);
          this.dataSource = this.chartService.buildHistogram(this.countries[0].label, this.selectedYear, histoData);
        },
        error => {
          alert("There was an error loading data from the database. Please try again later.");
        })
      }
      else{
        this.dataService.compareContriesInYear(this.countries, this.selectedYear)
          .subscribe((data: any) => {
            this.changeType();
            console.log(this.type);
            this.dataSource = this.chartService.buildComparingHistogram(data.countries);
          },
          error => {
            alert("There was an error loading data from the database (compare data).");
            console.log(error);
          })
      }
        
    }
    else{
      alert("You must choose a year.");
    }
  }

  public changeType(){
    if(this.countries.length == 1){
      if(this.selectedChart == 'Histogram'){
        this.type = 'column2d';
      }
      if(this.selectedChart == 'Pie Chart'){
        this.type = 'pie3d';
      }
    }
    else{
      if(this.selectedChart == 'Histogram'){
        this.type = 'mscolumn2d';
      }
    }
  }

  public addCountry(){
    this.router.navigate(['/map']);
  }

  public removeCountry(country: Country){
    this.selectionService.removeMapCountry(country);
    this.countries = this.selectionService.countriesForAnalysis;
  }
}
