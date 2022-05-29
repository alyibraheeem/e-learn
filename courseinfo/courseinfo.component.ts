import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css']
})
export class CourseinfoComponent implements OnInit {

  constructor(private Router:Router) { }
  gotodashbord(page:string):void{
    this.Router.navigate([`${page}`]);

    }
  ngOnInit(): void {
  }

}
