import { Component} from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  salesChartData:any[]=[
    {name: "Shell",value: "4000"},
    {name: "HSBC Holdings",value: "5000"},
    {name: "Tesco",value: "3000"},
    {name: "BP",value: "2000"},
    {name: "Unilever",value: "1000"}
  ];

  taskChartData:any[]=[
    {name: "aaa",priority:"High",value: "40"},
    {name: "bbb",priority:"Med",value: "66"},
    {name: "ccc",priority:"Low",value: "95"},
    {name: "ddd",priority:"Med",value: "30"},
    {name: "eee",priority:"High",value: "70"}
  ];
  view:[number,number] = [600, 300];

  isPopupPieVisible=false;
  isPopupBarVisible=false;
  popupValPie:any[]=[];
  popupValBar:any[]=[];

  pieChartSelection(e:any){
    this.popupValPie = [];
    /* console.log("pieChart=>",e) */
    this.popupValPie.push(e.name);
    this.popupValPie.push(e.value);
    /* this.popupValPie.push(e.label); */
    this.isPopupPieVisible=true
  }
  horizontalBarSelection(e:any){
    this.popupValBar = [];
    /* console.log("barChart=>",e) */
    this.popupValBar.push(e.name);
    this.popupValBar.push(e.value);
    /* this.popupValBar.push(e.label); */
    this.isPopupBarVisible=true
  }

}
