import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = environment.API_URI;
  USER = 'user';
  constructor( private http: HttpClient) { }

  addUser(name: string, email: string, groupDiscount: any) {
    const user = {
        name,
        email,
        groupDiscount
          };
    return  this.http.post(`${this.API_URI}/${this.USER}`, user);
  }

  getUsers() {
    return this.http.get(`${this.API_URI}/${this.USER}`);

  }




}
