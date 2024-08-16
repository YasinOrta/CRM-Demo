import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

private fullName = "";
private userName = ""; 
private role = "";

constructor() { }

  public getRoleFromStore(){
    return localStorage.getItem('role');
  }

  public getFullNameFromStore(){
    return localStorage.getItem('fullName');
  }

  public getUserNameFromStore(){
    return localStorage.getItem('userName');
  }

  public setRoleForStore(input:string){
    this.role = input;
    localStorage.setItem('role',JSON.stringify(input));
  }
  
  public setFullNameForStore(input:string){
    this.fullName = input;
    localStorage.setItem('fullName',input);
  }

  public setUserNameForStore(input:string){
    this.userName = input;
    localStorage.setItem('userName',input);
  }
}