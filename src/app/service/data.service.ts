import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }


  getDate(url: string){
    return this.http.get(`${this.envUrl.urlAddress}/${url}`);
  }

  create(url: string, body: any){
    return this.http.post(`${this.envUrl.urlAddress}/${url}`, body);
  }

  update(url: string, body: any){
    return this.http.put(`${this.envUrl.urlAddress}/${url}`, body);
  }

  delete(url: string){
    return this.http.delete(`${this.envUrl.urlAddress}/${url}`);
  }
}
