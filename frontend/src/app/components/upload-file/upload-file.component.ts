import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


const formats: string[] = ['CSV', 'XLS', 'XLXS'];
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  public countries: string[];
  public formats: string[] = formats;
  public fileFormat: string;
  public selectedCountry: string;
  public fileName: string;
  public file;
  public uploadForm;
  public disabled = 'disabled';

  constructor(private uploadService: UploadService, private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.countries = this.dataService.getCountries();
    this.uploadForm = this.formBuilder.group({
      sampleFile: [null, Validators.required],
      filename: [null, Validators.required],
      country: [null, Validators.required],
      format: [null, Validators.required]
    });
  }

  public onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('sampleFile').setValue(file);
    }
  }

  public uploadFile(){
    const formData = new FormData();
    formData.append('sampleFile', this.uploadForm.get('sampleFile').value);
    formData.append('filename', this.uploadForm.get('filename').value);
    formData.append('country', this.uploadForm.get('country').value);
    formData.append('format', this.uploadForm.get('format').value);
    alert("File " + this.uploadForm.get('filename').value + "." + this.uploadForm.get('format').value + " has been succesfully uploaded.");
    this.uploadService.uploadFile(formData)
      .subscribe((res: any) => {
        alert("File uploaded succesfully.");
      },
      error => {
        console.log(error)
      })
  }

}
