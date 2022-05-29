import { WebapiService } from './../webapi.service';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private service:WebapiService) { }
@Input ()acc:any;
id: number = 0;
name: string = "";
email: string = "";
password: string="";
username:string="";
year!:number;
studentId:string="";
  ngOnInit(): void {
    this.id = this.acc.id;
    this.name = this.acc.name;
    this.email = this.acc.email;
    this.password = this.acc.password;
    this.username = this.acc.username;
    this.year = this.acc.year;
    this.studentId = this.acc.studentId;

    //this.UsersList$=this.service.addUsers();
  }
  addaccc(){
    var val={
      id:this.id,
      name:this.name,
      email:this.email,
      password:this.password,
      username:this.username,
      year:this.year,
      studentId:this.studentId
};
this.service.addacc(val).subscribe(res=>{
  alert(res.toString());
});
  }

}
