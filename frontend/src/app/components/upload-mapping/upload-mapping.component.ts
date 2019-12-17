import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-mapping',
  templateUrl: './upload-mapping.component.html',
  styleUrls: ['./upload-mapping.component.css']
})
export class UploadMappingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(){
    console.log("Submit");
  }
}
