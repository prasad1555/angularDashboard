import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GaurdGuard } from 'src/app/gaurd.guard';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService, private Authgaurd: GaurdGuard, private router: Router) { }

  ngOnInit() {
  }


  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }


  logOut(){

    if(this.Authgaurd.isLoggedIn){
      this.router.navigate(['/']);
      return this.Authgaurd.isLoggedIn;
      
    }

  }

}
