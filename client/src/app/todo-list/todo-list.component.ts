import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Todo } from '../entities/todo';
import {TodoService} from '../services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todo$: Observable<Todo[]>;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todo$=this.todoService.getTodos();
  }

}
