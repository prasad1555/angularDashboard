import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GaurdGuard } from 'src/app/gaurd.guard';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private Authgaurd: GaurdGuard, private http:HttpClient, private dataService: DataService) { }
   year = 0;
   date = new Date();
  userInfo = {};

  
   
  ngOnInit() {    
    this.year = this.date.getFullYear()
  }


  getUserDetails(event){
    event.preventDefault();
    console.log(event);      
    const userName = event.target.elements[0].value;
    const passWord = event.target.elements[1].value;

    console.log(userName, passWord);  
    this.userInfo = {email:userName, password:passWord}
    this.dataService.postRequest(this.userInfo);

    this.Authgaurd.isLoggedIn = true;
    if(userName === 'admin' && passWord === 'admin' && this.Authgaurd.isLoggedIn){
      this.router.navigate(['/nextgen']);
    }

}




}
