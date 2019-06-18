import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
baseUrl:string = "https://jsonplaceholder.typicode.com/users";
potUrl:string = "http://localhost:5000/api/login";
// obj = {};

constructor(private httpClient : HttpClient) {}

get_products(){
    return this.httpClient.get(this.baseUrl).subscribe((res)=>{
      console.log(res);
  });
}


postRequest(obj){
  return this.httpClient.post(this.potUrl,obj).subscribe((res) => {
    console.log(res);
  });

}

}
