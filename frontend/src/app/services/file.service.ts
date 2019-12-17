import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public reader: FileReader;

  constructor() {
    this.reader = new FileReader();
    this.reader.onload = function(){
      var text = this.result;
      console.log(this.result);
    };
  }

  public readTxt(file: any){
    this.reader.readAsText(file);
  }
}
