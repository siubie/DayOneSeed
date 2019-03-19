import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDashboardComponent } from './containers/todo.dashboard.component';
import { AddTodoComponent } from './component/add-todo/add.todo.component';
import { TodoCountComponent } from './component/todo-count/todo.count.component';
import { TodoItemComponent } from './component/todo-item/todo.item.component';
import { TodoDashboardService } from './todo.dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoDashboardComponent,
    AddTodoComponent,
    TodoCountComponent,
    TodoItemComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [TodoDashboardComponent],
  providers: [TodoDashboardService]
})
export class TodoDashboardModule {}
