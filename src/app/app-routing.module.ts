import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from '../app/components/history/history.component';
import { DownloadsComponent } from '../app/components/downloads/downloads.component';
import { MaindasboardComponent } from './components/maindasboard/maindasboard.component';
import { GaurdGuard } from './gaurd.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nextgen', 
    component: DashboardComponent,    
    canActivate:[GaurdGuard],
    children:[         
      {path:"", redirectTo:"dashboard", pathMatch:'full' },
      {path:"dashboard", component:MaindasboardComponent, pathMatch:'full' },
      {path:"history", component:HistoryComponent, pathMatch:'full' },
      {path:"downloads", component:DownloadsComponent, pathMatch:'full' },
      {path:"***", component:NotfoundComponent },
    ]
  },
  {path:"**", component:NotfoundComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}