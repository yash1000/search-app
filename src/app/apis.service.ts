import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  user = localStorage.getItem('user');
  headers = new HttpHeaders({ 'api-token': this.user });
  url: any = 'https://kapistage.larvolomni.com/login';
  dataurl: any = 'https://kapistage.larvolomni.com/areas/get';
  constructor(private https: HttpClient) {}
  /**
   * @param emp login api with auth token generation
   */
  apicall(emp: any) {
    return this.https.post(this.url, emp);
  }
  /**
   * get array of data from api
   */
  getdata() {
    return this.https.get(this.dataurl, {
      headers: this.headers
    });
  }
}
