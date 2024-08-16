import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Tab } from './interfaces/tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'CRM';

  loginStatus=this.auth.isLoggedIn();

  constructor(private router:Router,private auth:AuthService){}

  /* goDashboardPage(){
    this.router.navigate(['dashboard']);
  }
  goLoginPage(){
    this.router.navigate(['login']);
  }
  goRegisterPage(){
    this.router.navigate(['register']);
  }
  goTasksPage(){
    this.router.navigate(['tasks']);
  }
  goSalesCRMPage(){
    this.router.navigate(['SalesCRM']);
  }
  goCustomerPage(){
    this.router.navigate(['customer']);
  } */

    tabsWithIconAndText: Tab[]=[
      {id:1,text:"Dashboard",icon:"chart"},{id:2,text:"Customer",icon:"user"},{id:3,text:"Tasks",icon:"accountbox"},{id:4,text:"Sales",icon:"ordersbox"}
    ]
  
    widgetWrapperClasses = {
      'widget-wrapper': true,
      'widget-wrapper-horizontal': true,
      'widget-wrapper-vertical': false,
      'strict-width': false,
    };
  
    navigate(e:any){
      console.log(e.addedItems[0].text)
      if(e.addedItems[0].text === "Dashboard"){this.router.navigate(['dashboard']);}
      if(e.addedItems[0].text === "Customer"){this.router.navigate(['customer']);}
      if(e.addedItems[0].text === "Tasks"){this.router.navigate(['tasks']);}
      if(e.addedItems[0].text === "Sales"){this.router.navigate(['SalesCRM']);}
    }
  
    sampleList:any []=[
      {value:"Profile"},{value:"Inbox"},{value:"LogOut"}
    ]
  

}
