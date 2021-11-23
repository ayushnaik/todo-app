import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/shared/model/todo';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-todo-dialog',
  templateUrl: './manage-todo-dialog.component.html',
  styleUrls: ['./manage-todo-dialog.component.scss']
})
export class ManageTodoDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ManageTodoDialogComponent>,
    private http: HttpClient
  ) { }

  public content!: string;
  public hasError = false;
  public errorMessage!: string;

  ngOnInit() {
  }

  validate() {
    if (!this.content) {
      this.hasError = true;
      this.errorMessage = "Cannot submit the empty content.";
    }
  }

  saveTodo() {
    this.validate();
    if (!this.hasError) {
      const newTodo = new Todo();
      newTodo.content = this.content;
      this.http.post("https://t0do-server.herokuapp.com/todo", newTodo).subscribe(
        (resp: any) => {
          console.log(resp);
          this.dialogRef.close();
        },
        err => console.log(err)
      )
    }
  }

}
