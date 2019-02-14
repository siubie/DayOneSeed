import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
@Component({
  selector: 'todo-item',
  styleUrls: [],
  templateUrl: 'todo.item.html'
})
export class TodoItemComponent {
  @Input()
  item: Todo;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onStatusClick(todo: Todo) {
    this.status.emit(todo);
  }
}
