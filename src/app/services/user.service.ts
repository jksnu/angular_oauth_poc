import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = '//localhost:8000/';
  private httpOptions = {
    /*headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    })*/
  };

  constructor(private http: HttpClient) { }

  getHomeDetail() {
    return this.http.get(`//localhost:4200/api`, this.httpOptions);
    //return this.http.get(`//localhost:8000/`, this.httpOptions);
  }
  getUsers() {
    return this.http.get(`//localhost:4200/users`, this.httpOptions);
  }
  registerUser(username, password) {
    const bodyData = {
      "username": username,
      "password": password
    }
    return this.http.post(`//localhost:4200/registerUser`, bodyData, this.httpOptions);
  }
  deleteUser(username) {
    return this.http.delete(`//localhost:4200/delete/${username}`, this.httpOptions);
  }
  login(username, password) {
    const bodyData = {
      "username": username,
      "password": password
    }
    return this.http.post(`//localhost:4200/login`, bodyData, this.httpOptions);
  }
  logout(username) {
    const bodyData = {
      "username": username
    }
    return this.http.post(`//localhost:4200/logout`, bodyData, this.httpOptions);
  }
}
