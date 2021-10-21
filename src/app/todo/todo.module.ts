import { NgModule } from '@angular/core';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { CommonModule } from '@angular/common';
import { ManageTodoDialogComponent } from './manage-todo-dialog/manage-todo-dialog.component';

@NgModule({
  declarations: [
    TodoListComponent, 
    TodoItemComponent,
    TodoContainerComponent, 
    ManageTodoDialogComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ManageTodoDialogComponent
  ]
})
export class TodoModule { }
