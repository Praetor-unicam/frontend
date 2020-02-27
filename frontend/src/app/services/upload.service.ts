import { Injectable } from '@angular/core';
import { Endpoint } from '../models/Endpoint';
import { EndpointStatus } from '../models/EndpointStatus';
import { CountryStatus } from '../models/CountryStatus';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'multipart/form-data'
  })
};


const endpoints: Endpoint[] = [
  {'country': 'Luxembourg', 'status': EndpointStatus.Available},
  {'country': 'Italy', 'status': EndpointStatus.Not_Available}
]

const statuses: CountryStatus[] = [
  {'country': 'Luxembourg', 'endpoint_status': EndpointStatus.Available, 'mapping_status': EndpointStatus.Not_Available},
  {'country': 'Italy', 'endpoint_status': EndpointStatus.Not_Available, 'mapping_status': EndpointStatus.Available}
]
 
@Injectable({
  providedIn: 'root'
})

export class UploadService {

  constructor(private http: HttpClient) { }

  public getEndpoints(): Endpoint[]{
    return endpoints;
  }

  public getCountriesStatus(){
    return statuses;
  }

  public uploadFile(file: FormData){
    let body = {dan: 'dan', dandan: 'dandan'}
    return this.http.post('/upload', file);
  }
}
