import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Endpoint } from 'src/app/models/Endpoint';
import { CountryStatus } from 'src/app/models/CountryStatus';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public countriesStatus: CountryStatus[];

  constructor(private uploadSevice: UploadService) { }

  ngOnInit() {
    this.countriesStatus = this.uploadSevice.getCountriesStatus();
  }

}
