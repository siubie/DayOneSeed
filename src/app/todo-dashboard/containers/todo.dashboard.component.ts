import { Component } from '@angular/core';

import { Todo } from '../models/todo.model';
@Component({
  selector: 'todo-dashboard',
  styleUrls: ['todo.dashboard.css'],
  templateUrl: 'todo.dashboard.html'
})
export class TodoDashboardComponent {
  todoList: Todo[] = [];

  handleAddTodo(task: string) {
    const itemTodo = new Todo('1', task, false);
    this.todoList.push(itemTodo);
    return false;
  }

  handleToggleFinished(todo: Todo) {
    console.log(this.todoList);
    return (todo.status = !todo.status);
  }
}
