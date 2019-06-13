import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from '../app/components/history/history.component';
import { DownloadsComponent } from '../app/components/downloads/downloads.component';
import { MaindasboardComponent } from './components/maindasboard/maindasboard.component';

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