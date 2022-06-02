import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-view-weeks',
  templateUrl: './view-weeks.component.html',
  styleUrls: ['./view-weeks.component.css']
})
export class ViewWeeksComponent  {

  public pageTitle = 'Welcome to View Files component';
  constructor(private http:  HttpClient) {
    this.getAllFiles();
  }
  files: any = [];
  getAllFiles()
  {
    //debugger
    return this.http.get('https://localhost:7263/api/Weeks')
    .subscribe((result) => {
      this.files = result;
      console.log(result);
  });
  }
  downloadFile(id: number, contentType: string)
  {
    return this.http.get(`https://localhost:7263/api/Weeks/${id}`, {responseType: 'blob'})
    .subscribe((result: Blob) => {
      const blob = new Blob([result], { type: contentType }); // you can change the type
      const url= window.URL.createObjectURL(blob);
      window.open(url);
      console.log("Success");
  });
  }

}
