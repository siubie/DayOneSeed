import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoDashboardService } from '../todo.dashboard.service';
@Component({
  selector: 'todo-dashboard',
  styleUrls: ['todo.dashboard.css'],
  templateUrl: 'todo.dashboard.html'
})
export class TodoDashboardComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private todoDashboardService: TodoDashboardService) {}
  isTeaBreakTime = true;

  ngOnInit() {
    this.todoDashboardService.getTodos().subscribe(data => {
      this.todoList = data;
    });
  }

  handleAddTodo(task: string) {
    const itemTodo = new Todo(task, false);
    this.todoDashboardService.createTodo(itemTodo).subscribe(data => {
      this.todoList.push(itemTodo);
    });
    return false;
  }

  handleToggleFinished(todo: Todo) {
    todo.status = !todo.status;
    this.todoDashboardService.updateTodo(todo).subscribe(data => {
      this.todoDashboardService.getTodos().subscribe(list => {
        this.todoList = list;
      });
    });
  }
}
