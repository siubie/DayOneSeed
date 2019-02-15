import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoDashboardComponent } from '../../containers/todo.dashboard.component';
@Component({
  selector: 'todo-count',
  styleUrls: [],
  templateUrl: 'todo.count.html'
})
export class TodoCountComponent {
  @Input()
  todos: Todo[];
  constructor() {}
  counterFinished(): number {
    if (this.todos) {
      return this.todos.filter((todo: Todo) => todo.status).length;
    } else {
      return 0;
    }
  }
}
