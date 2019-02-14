import { Component } from '@angular/core';
import { Todo } from './todo-dashboard/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List App';
}
