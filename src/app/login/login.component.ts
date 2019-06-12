import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  getUserDetails(event){
    event.preventDefault();
    console.log(event);      
    const userName = event.target.elements[0].value;
    const passWord = event.target.elements[1].value;

    console.log(userName, passWord);  
    this.router.navigate(['/nextgen']);

}

}
