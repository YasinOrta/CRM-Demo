import { Component } from '@angular/core';
import { Tab } from '../../interfaces/tab';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userName:string="";
  fullName:string= "";

  constructor(
    private router:Router,
    private auth:AuthService,
    private userStore:UserStoreService,
    private overlayService: OverlayService
  ){}

  ngOnInit(){
    this.userName = this.userStore.getUserNameFromStore()!;
    this.fullName = this.userStore.getFullNameFromStore()!;
  }

  logOut(){
    localStorage.clear();
    this.auth.signOut()
    console.log("Logged out!")
    this.router.navigate(['login']);
  }

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
    if(e.addedItems[0].text === "Dashboard"){this.router.navigate(['home/dashboard']);}
    if(e.addedItems[0].text === "Customer"){this.router.navigate(['home/customer']);}
    if(e.addedItems[0].text === "Tasks"){this.router.navigate(['home/tasks']);}
    if(e.addedItems[0].text === "Sales"){this.router.navigate(['home/SalesCRM']);}
  }

  emailItems:any[]=[
    {id:1,text:"option1"},
    {id:2,text:"option2"},
    {id:3,text:"option3"}
  ];

  notificationItems:any[]=[
    {id:1,text:"option1"},
    {id:2,text:"option2"},
    {id:3,text:"option3"}
  ];

  userItems:any[]=[
    {id:1,text:"Profile",icon:"user"},
    {id:2,text:"Inbox", icon:"email"},
    {id:3,text:"Lock Screen", icon:"lock"},
    {id:4,text:"Sign Out",icon:"login"}
  ];

  onMenuItemClick(event:any){
    console.log("Option selected: ",event.itemData.text)
    switch(event.itemData.text){
      case 'Lock Screen' :
        console.log("here") 
        this.overlayService.openOverlay();
        break;
      case 'Sign Out' : 
        this.auth.signOut(); 
        break;
      case 'Profile' :
        console.log("User Name: ",this.userName)
        console.log("Full Name: ",this.fullName)
    }
    /* if(event.itemData.text === 'Lock Screen'){
      //this.router.navigate(['lockScreen']);
      this.lockScreen();
    }
    if(event.itemData.text === 'Sign Out'){
      this.auth.signOut();
    } */
  }

  overlayState = this.overlayService.overlayState$;

  unlockApp(success: boolean) {
    if (success) {
      this.overlayService.closeOverlay();
    }
  }

}