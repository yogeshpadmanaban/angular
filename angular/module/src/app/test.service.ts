import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  [x: string]: any;
 // http: any;
  loading: boolean;
  

constructor(private http:HttpClient) {    }

validate(data){

  this.loading = true;
  return this.http.post('http://192.168.1.198:7000',data).toPromise().then(function (data) {

  }, function (e) {
    console.log(e)
  });
  
}



  }

