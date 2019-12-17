import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-mapping',
  templateUrl: './upload-mapping.component.html',
  styleUrls: ['./upload-mapping.component.css']
})
export class UploadMappingComponent implements OnInit {


  public fileData = null;
  constructor() { }
  
  fileEvent(fileInput: any) {
    console.log("HEY")
    this.fileData = <File>fileInput.target.files[0];
  }
  
  onSubmit() {
    console.log(this.fileData);
    let formData = new FormData();
    formData.append('file', this.fileData);
    console.log(formData);
  }

  ngOnInit() {
  }
}
