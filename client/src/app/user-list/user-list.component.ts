import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user$:Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user$=this.userService.getUsers();
  }
}
