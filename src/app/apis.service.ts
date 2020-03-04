import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  user=localStorage.getItem("user");
  // console.log(user)  
  headers = new HttpHeaders(
    {'api-token':this.user}
    );
url:any='https://kapistage.larvolomni.com/login';
dataurl:any="https://kapistage.larvolomni.com/areas/get"
  constructor(private https: HttpClient) {
    // console.log(this.user)
    console.log("in service")
   
    console.log("in service")
   }
  apicall(emp: any) {
    return this.https.post(this.url,emp);
  }

  data() {
    return this.https.get(this.dataurl,{
      headers:this.headers
    });
  }
}
