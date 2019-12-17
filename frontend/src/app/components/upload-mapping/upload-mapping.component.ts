import { Component, OnInit } from '@angular/core';
import { SelectionService } from 'src/app/services/selection.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-upload-mapping',
  templateUrl: './upload-mapping.component.html',
  styleUrls: ['./upload-mapping.component.css']
})
export class UploadMappingComponent implements OnInit {

  public country: string;


  public fileData = null;
  constructor(private selectionService: SelectionService, private fileService: FileService) { }
  
  fileEvent(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
  
  onSubmit() {
    console.log(this.fileData);
    this.fileService.readTxt(this.fileData);
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
    this.country = this.selectionService.selectedCountry;
  }
}
