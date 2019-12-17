import { Component, OnInit } from '@angular/core';
import { MappingService } from 'src/app/services/mapping.service';
import { SelectionService } from 'src/app/services/selection.service';
import { Mapping } from 'src/app/models/Mapping';

@Component({
  selector: 'app-modify-mapping',
  templateUrl: './modify-mapping.component.html',
  styleUrls: ['./modify-mapping.component.css']
})
export class ModifyMappingComponent implements OnInit {

  public country: string;
  public categories: string[];
  public ICCS_categories: string[];
  public mappings: Mapping[];

  constructor(private mappingService: MappingService, private selectionService: SelectionService) { }

  ngOnInit() {
    this.country = this.selectionService.selectedCountry;
    this.mappings = this.mappingService.getMappingFromCountry(this.country);
    this.ICCS_categories = this.mappingService.getICCSCategories();
  }

}
