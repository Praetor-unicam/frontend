import { Component, OnInit } from '@angular/core';
import { SelectionService } from 'src/app/services/selection.service';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';

const countries: string[] = ['Austria', 'Belgium', 'Cyprus', 'Denmark', 'England', 'Finland', 'France', 'Germany', 'Hungary', 'Italy', 'Luxembourg',
                              'Netherlands', 'Northern Ireland', 'Portugal', 'Spain'];
@Component({
  selector: 'app-upload-mapping',
  templateUrl: './upload-mapping.component.html',
  styleUrls: ['./upload-mapping.component.css']
})
export class UploadMappingComponent implements OnInit {

  //public country: string;
  public countries: string[] = countries;


  public fileData = null;
  constructor(private selectionService: SelectionService, private fileService: FileService, private router: Router) { }
  
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
      this.fileService.readTxt(this.fileData);
      let formData = new FormData();
      formData.append('file', this.fileData);
      this.router.navigate(['/modify_mapping']);
    }
  }

  ngOnInit() {
    //this.country = this.selectionService.selectedUploadCountry;
  }
}
