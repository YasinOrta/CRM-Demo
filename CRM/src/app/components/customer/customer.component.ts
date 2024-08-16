import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  sampleData:any []=[
    {id:1,name:"Oliver",company:"Shell",email:"oliver@gmail.com",phone:"000-333-222",type:"Bank",position:"General Manager"},
    {id:2,name:"Archie",company:"HSBC Holdings",email:"archie@gmail.com",phone:"000-111-333",type:"Fabric",position:"Customer Representative"},
    {id:3,name:"Arthur",company:"Tesco",email:"arthur@gmail.com",phone:"000-333-222",type:"Starter",position:"Region Manager"},
    {id:4,name:"Lily",company:"BP",email:"lily@gmail.com",phone:"000-333-222",type:"Petrol",position:"Sales Manager"},
    {id:5,name:"Harry",company:"Unilever",email:"harry@gmail.com",phone:"444-333-555",type:"Shipment",position:"Engineer"}
  ]

  selectTask(event:any){
    event.component.byKey(event.currentSelectedRowKeys[0]).done((data: any)=>{
      if(data){
        console.log("Hi m8, selected row is => ",data)
      }
    })
  }
  
}
