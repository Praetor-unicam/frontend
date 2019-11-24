import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Endpoint } from 'src/app/models/Endpoint';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public endpoints: Endpoint[];

  constructor(private uploadSevice: UploadService) { }

  ngOnInit() {
    this.endpoints = this.uploadSevice.getEndpoints();
  }

}
