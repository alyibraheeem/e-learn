import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';
import { Observable } from 'rxjs';
import { WebapiService } from './../webapi.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service:WebapiService) { }
  @Input ()Course:any;

  instructorsids: string = "";
  name: string = "";
  des: string="";
  year!:number;

  ngOnInit(): void {

   this.instructorsids = this.Course.instructorsids;
    this.name = this.Course.name;

    this.des = this.Course.des;
    this.year = this.Course.year;

  }
  addcoursee(){
    var val={
     // id:this.id,

      instructorsids:this.instructorsids,
      name:this.name,
      des:this.des,
      year:this.year




};
console.log(val.instructorsids);
this.service.addcourse(val).subscribe(res=>{
  alert(res.toString());

});
  }


}



// s :Todo[]=[
//   new Todo (Guid.create(),"ahmed","Ahmed","oop",false),
//   new Todo (Guid.create(),"ashgan","Aly","Algorithm",false),
// ]
// onSubmit(form :NgForm){
// let todo=new Todo(Guid.create(),form.value.instructorName,form.value.discription,
// form.value.courseName,false);
// this.s.push(todo);
// form.resetForm();
// }
// onComplete (id:Guid)
// {
// let todo =this.s.filter(x=>x.id==id)[0];
// todo.isComplete=true;
// }
// onDelete (id:Guid)
// {
//   let todo=this.s.filter(x=>x.id==id)[0];
//   let index=this.s.indexOf(todo,0);
//   if (index>-1){
//     this.s.splice(index,1);
//   }
// }


