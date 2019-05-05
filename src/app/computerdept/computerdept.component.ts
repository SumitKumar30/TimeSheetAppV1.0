import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computerdept',
  templateUrl: './computerdept.component.html',
  styleUrls: ['./computerdept.component.css']
})
export class ComputerdeptComponent implements OnInit {
  A: boolean;
  B: boolean;
  C: boolean;
  D: boolean;
  facultyA: boolean;
  text: any;
  id: any;
  tableToggle: number;
  constructor() { }

  ngOnInit() {
  }
  public pieChartLabels:string[] = ["A", "B", "C", "D"];
  public pieChartData:number[] = [1, 3, 4, 2];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': [
               "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#6bda5d"
            ]}
  public compChartClicked(e:any):void {
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
        if(label=="A"){
          this.A=true;
          this.B=false;
          this.C=false;
          this.D=false;
          this.facultyA=false;
        }
        else if(label=="B"){
          this.A=false;
          this.B=true;
          this.C=false;
          this.D=false;
          this.facultyA=false;
        }
        else if(label=="C"){
          this.A=false;
          this.B=false;
          this.C=true;
          this.D=false;
          this.facultyA=false;
        }
        else if(label=="D"){
          this.A=false;
          this.B=false;
          this.C=false;
          this.D=true;
          this.facultyA=false;
        }
      }
    }
  }


}
