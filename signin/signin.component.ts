import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
toggle(){
  alert('Welcome to our website');
}
  ngOnInit(): void {
  }

}
