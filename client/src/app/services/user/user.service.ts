import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {User} from '../../entities/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers()
  {
    console.log('In getUsers()');
    return this.http.get<User[]>('/api/users');
  }
}
