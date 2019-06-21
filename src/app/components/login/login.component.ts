import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { GaurdGuard } from 'src/app/gaurd.guard';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  year = 0;
   date = new Date();
  userInfo = {};
  

  constructor(private router: Router, 
              private Authgaurd: GaurdGuard, 
              private http:HttpClient, 
              private dataService: DataService, 
              private _activatedRoute: ActivatedRoute,
              private _myservice: MyserviceService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
   }

   


  
   
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

isValid(controlName) {
  return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
}

login() {
  console.log(this.loginForm.value);

  if (this.loginForm.valid) {
    this._myservice.login(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token', data.toString());
          this.router.navigate(['/nextgen']);
          // this._router.navigate(['/dash']);
        },
        error => { }
      );
  }
}

movetoRegister() {
  this.router.navigate(['/register'],  { relativeTo: this._activatedRoute });
}



}
