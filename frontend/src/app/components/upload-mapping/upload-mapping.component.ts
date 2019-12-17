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
    this.fileData = <File>fileInput.target.files[0];
  }
  
  onSubmit() {
    console.log(this.fileData);
    if(this.fileData == null){
      alert("You must first select a file.");
    }
    else if(this.fileData.type != 'text/plain'){
      alert("File format not valid. You must enter a txt file.");
    }
    else{
      let formData = new FormData();
      formData.append('file', this.fileData);
      console.log(formData);
    }
  }

  ngOnInit() {
  }
}
