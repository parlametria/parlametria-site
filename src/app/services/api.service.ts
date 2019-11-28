import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dataDir = '/data/';

  constructor(private http: HttpClient) { }

  getJson(filename: string) {
    return this.http.get(this.dataDir + filename);
  }

}
