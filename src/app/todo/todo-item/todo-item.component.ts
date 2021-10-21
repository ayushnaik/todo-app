import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/shared/model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Output() todoItemEmitter = new EventEmitter<any>();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() { }

  updateTodoStatus(todo: Todo) {
    this.http.put("http://localhost:4000/todo/" + todo._id, todo).subscribe(
      (resp: any) => {
        this.refreshTodoList();
      },
      err => console.log(err)
    )
  }

  deleteTodo(todo: Todo) {
    this.http.delete("http://localhost:4000/todo/" + todo._id).subscribe(
      (resp: any) => {
        console.log('Delete succesfully');
        this.refreshTodoList();
      },
      err => console.log(err)
    )
  }

  refreshTodoList() {
    this.todoItemEmitter.emit();
  }
}
