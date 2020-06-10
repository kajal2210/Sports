import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '077fe507985744818b3f405349c79601';
  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.API_KEY}`);
  }
}
