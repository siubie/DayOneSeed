import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';
@Component({
  selector: 'todo-count',
  styleUrls: [],
  templateUrl: 'todo.count.html'
})
export class TodoCountComponent {
  @Input()
  todos: Todo[];
  constructor() {}
}
