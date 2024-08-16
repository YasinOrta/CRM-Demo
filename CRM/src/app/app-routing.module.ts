import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesCRMComponent } from './components/sales-crm/sales-crm.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '',   redirectTo:'login', pathMatch: 'full' },
  {path:"home",component:HomeComponent,canActivate:[AuthGuard],children:[
    {path:"SalesCRM",component:SalesCRMComponent, canActivate:[AuthGuard]},
    {path:"tasks",component:TasksComponent, canActivate:[AuthGuard]},
    {path:"customer",component:CustomerComponent, canActivate:[AuthGuard]},
    {path:"dashboard",component:DashboardComponent, canActivate:[AuthGuard]}
  ]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
