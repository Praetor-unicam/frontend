import { Component, OnInit } from '@angular/core';
import { MappingService } from 'src/app/services/mapping.service';
import { SelectionService } from 'src/app/services/selection.service';
import { Mapping } from 'src/app/models/Mapping';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-mapping',
  templateUrl: './modify-mapping.component.html',
  styleUrls: ['./modify-mapping.component.css']
})
export class ModifyMappingComponent implements OnInit {

  public selectedCountry: string;
  public categories: string[];
  public ICCS_categories: string[];
  public mappings: Mapping[];
  public countries: string[] = [];

  constructor(private mappingService: MappingService, private selectionService: SelectionService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    //this.country = this.selectionService.selectedUploadCountry;
    this.countries = this.dataService.getCountries();
  }

  public loadMapping(){
    this.mappings = this.mappingService.getMappingFromCountry(this.selectedCountry);
    this.ICCS_categories = this.mappingService.getICCSCategories();
  }

  public uploadMapping(){
    alert("Mapping uploaded succesfully!");
    this.router.navigate(['/home']);
  }

}
