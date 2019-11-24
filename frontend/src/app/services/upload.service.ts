import { Injectable } from '@angular/core';
import { Endpoint } from '../models/Endpoint';
import { EndpointStatus } from '../models/EndpointStatus';



const endpoints: Endpoint[] = [
  {'country': 'Luxembourg', 'status': EndpointStatus.Available},
  {'country': 'Italy', 'status': EndpointStatus.Not_Available}
]
 
@Injectable({
  providedIn: 'root'
})

export class UploadService {

  constructor() { }

  public getEndpoints(): Endpoint[]{
    return endpoints;
  }
}
