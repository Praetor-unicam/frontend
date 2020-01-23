import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Endpoint } from 'src/app/models/Endpoint';
import { CountryStatus } from 'src/app/models/CountryStatus';
import { SelectionService } from 'src/app/services/selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public countriesStatus: CountryStatus[];

  constructor(private uploadSevice: UploadService, private selectionService: SelectionService, private router: Router) { }

  ngOnInit() {
    this.countriesStatus = this.uploadSevice.getCountriesStatus();
  }

  public uploadData(country: string){
    this.selectionService.selectUploadCountry(country);
    alert("Uploading data from " + country + " endpoint");
  }

  public uploadMapping(country: string){
    this.selectionService.selectUploadCountry(country);
    this.router.navigate(['/modify_mapping']);
  }

  public modifyMapping(country: string){
    this.selectionService.selectUploadCountry(country);
    this.router.navigate(['/modify_mapping']);
  }
}
