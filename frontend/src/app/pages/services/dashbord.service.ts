import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class DashbordService  {

  constructor(private http:HttpClient) { }

  getAllUsers() {
    return   this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_USERS);
  }
}
