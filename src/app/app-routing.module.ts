import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { MaindasboardComponent } from './maindasboard/maindasboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nextgen', 
    component: DashboardComponent,    
    children:[         
      {path:"", redirectTo:"dashboard", pathMatch:'full' },
      {path:"dashboard", component:MaindasboardComponent, pathMatch:'full' },
      {path:"history", component:HistoryComponent, pathMatch:'full' },
      {path:"downloads", component:DownloadsComponent, pathMatch:'full' },
    ]
  }  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}