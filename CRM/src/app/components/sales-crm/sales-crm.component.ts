import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-crm',
  templateUrl: './sales-crm.component.html',
  styleUrl: './sales-crm.component.scss'
})
export class SalesCRMComponent {

  constructor(){}
  ngOnInit(){}

  selectedRow:any;

  sampleData:any []=[
    {id:1,name: "aaa",company: "Shell", status:"Lost", priority:"Low", estimatedValue: "$1000000",accountOwner:"aaA"},
    {id:2,name: "bbb",company: "HSBC Holdings	", status:"Qualified", priority:"Low", estimatedValue: "$23000000",accountOwner:"aaB"},
    {id:3,name: "ccc",company: "Tesco", status:"Proposal", priority:"High", estimatedValue: "$4000000",accountOwner:"aaC"},
    {id:4,name: "ddd",company: "BP", status:"Closed", priority:"Medium", estimatedValue: "$5000000",accountOwner:"aaD"},
    {id:5,name: "eee",company: "Unilever", status:"Lead", priority:"Medium", estimatedValue: "$6000000",accountOwner:"aaE"},
    {id:6,name: "fff",company: "Shell", status:"Negotiotion", priority:"High", estimatedValue: "$503455400",accountOwner:"fdsasd"}
  ]

  selectSale(event:any){
    event.component.byKey(event.currentSelectedRowKeys[0]).done((data: any)=>{
      if(data){
        console.log("Hi m8, selected row is => ",data)
      }
    })
  }

}