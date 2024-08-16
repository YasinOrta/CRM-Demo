import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {DxButtonModule, DxDataGridModule, DxDropDownButtonModule, DxFormModule, DxNumberBoxModule, DxPopupModule, DxScrollViewModule, DxSortableModule, DxTabsModule, DxTextBoxModule, DxTreeListModule} from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesCRMComponent } from './components/sales-crm/sales-crm.component';
import { CustomerComponent } from './components/customer/customer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    DashboardComponent,
    SalesCRMComponent,
    CustomerComponent,
    HomeComponent,
    LockScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
    DxButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DxFormModule,
    HttpClientModule,
    DxDataGridModule,
    DxTreeListModule,
    DxTabsModule,
    MatToolbarModule,
    NgxChartsModule,
    DxPopupModule,
    DxTextBoxModule,
    DxScrollViewModule,
    DxSortableModule,
    DxNumberBoxModule,
    DxDropDownButtonModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
