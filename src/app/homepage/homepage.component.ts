import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  timesheetapp:FormGroup;
 tobeRendered:boolean=false;
 status:string;
 timer:number;
 myDateValue:Date;
 tasks=[];

 constructor(private formBuilder:FormBuilder){}
 ngOnInit(){
   this.timesheetapp=this.formBuilder.group({
     status:[''],
     timer:[''],
     date:['']
   });
   this.myDateValue = new Date();
 }

showDashboard(){
  console.log("in")
  this.tobeRendered=true;
  console.log("rendered",this.tobeRendered)
  this.tasks.push({Name:this.status,Time:this.timer,Date:this.myDateValue})
  console.log("tasks",this.tasks)
}

}
