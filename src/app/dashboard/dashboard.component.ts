import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  text: any;
  id: any;
  tableToggle: number;
  compPie: boolean=false;
  common: boolean=true;
  electroPie: boolean;
  mechPie: boolean;
  civilPie: boolean;
 

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  public pieChartLabels:string[] = ["Computer Science", "Electronics", "Mechanical", "Civil"];
  public pieChartData:number[] = [21, 39, 10, 14];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': [
               "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#6bda5d"
            ]}
 
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
    if(e.active.length>0){
      const chart=e.active[0]._chart;
      const activePoints=chart.getElementAtEvent(e.event);
      if(activePoints.length>0){
        //get the internal index of slice in pie chart
        const clickedElementIndex=activePoints[0]._index;
        const label=chart.data.labels[clickedElementIndex];
        //get value by index
        const value=chart.data.datasets[0].data[clickedElementIndex];
        console.log(clickedElementIndex,label,value);
        this.text=label;
        this.id=clickedElementIndex+1;
        this.tableToggle=1;
        
        if(label=="Computer Science"){
         this._route.navigate(["/computerdept"]);
         this.pieChartLabels= ["A", "B", "C", "D"];
         this.pieChartData= [10, 20, 15, 5];
          this.compPie=true;
          this.electroPie=false;
          this.civilPie=false;
          this.mechPie=false;
          this.common=false;
        }
        else if(label=="Electronics"){
          this._route.navigate(["/electronicdept"]);
          this.electroPie=true;
          this.compPie=false;
          this.civilPie=false;
          this.mechPie=false;
          this.common=false;
        }
        else if(label=="Mechanical"){
          this._route.navigate(["/mechanicaldept"]);
          this.mechPie=true;
          this.electroPie=false;
          this.compPie=false;
          this.civilPie=false;
          this.common=false;
        }
        else if(label=="Civil"){
          this._route.navigate(["/civildept"]);
          this.civilPie=true;
          this.mechPie=false;
          this.electroPie=false;
          this.compPie=false;
          this.common=false;
        }
      }
      }
    }

 // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }
}
