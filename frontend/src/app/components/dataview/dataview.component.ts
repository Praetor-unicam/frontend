import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

  public years: number[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.years = this.dataService.getAvailableYearsFromCountry(this.dataService.selectedRegion);
  }

}
