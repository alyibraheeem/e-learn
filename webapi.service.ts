import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
readonly APIUrl="https://localhost:7263/api";
  constructor(private http:HttpClient) { }

  addacc(val:any){
return this.http.post(this.APIUrl+'/Signings',val)

  }
  getacc():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Signings');
  }
  addcourse(val:any){
    return this.http.post(this.APIUrl+'/Courses1/PostCourse',val)
  }
  getcourse():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Courses1');
  }

}

