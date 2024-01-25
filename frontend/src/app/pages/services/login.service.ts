import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInUser: any;

  constructor(private http: HttpClient) { }

  login(loginObj: any): Observable<any> {
    //debugger;
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.LOGIN, loginObj);
  }
  getLoggedInUser(): any {
    return this.loggedInUser;
  }
  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
  }
}

