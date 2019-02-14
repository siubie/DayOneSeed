import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'add-todo',
  styleUrls: [],
  templateUrl: 'add.todo.html'
})
export class AddTodoComponent {
  @Output()
  create: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClickAddTodo(value: string) {
    this.create.emit(value);
    return false;
  }
}
