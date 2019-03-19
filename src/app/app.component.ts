import { Component } from '@angular/core';
import { Todo } from './todo-dashboard/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List App';
  todoList: Todo[] = [];

  handleAddTodo(task: string) {
    const itemTodo = new Todo(task, false);
    this.todoList.push(itemTodo);
    return false;
  }

  handleToggleFinished(todo: Todo) {
    console.log(this.todoList);
    return (todo.status = !todo.status);
  }
}
