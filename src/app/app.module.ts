import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from '../app/components/history/history.component';
import { DownloadsComponent } from '../app/components/downloads/downloads.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaindasboardComponent } from './components/maindasboard/maindasboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component'
import { MyserviceService } from './myservice.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HistoryComponent,
    DownloadsComponent,
    NotfoundComponent,
    NavbarComponent,
    SidebarComponent,
    MaindasboardComponent, 
    RegisterComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
