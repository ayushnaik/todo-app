import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  public todos: Array<any> = [];

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.http.get("https://t0do-server.herokuapp.com/todos").subscribe(
      (resp: any) => {
        this.todos = resp;
      },
      err => console.log(err)
    );
  }
}
