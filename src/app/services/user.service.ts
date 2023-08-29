import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  listUsers(){
   let data = this.http.get<any>("http://141.94.139.29:3000/user/getAllUsers")
   return data
  }

  addUser(body : any){
    let data = this.http.post<any>("http://141.94.139.29:3000/user/addUser",body)
    return data
  }
}
