import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nextgen';
  constructor(private appService: AppService, private Http: HttpClient, private data: DataService) {}
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
  // baseUrl:string = "https://jsonplaceholder.typicode.com/users";

  getDate(){    
    this.data.get_products();
  }
}
