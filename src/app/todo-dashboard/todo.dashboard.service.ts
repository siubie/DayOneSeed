import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoDashboardService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + 'todo');
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl + 'todo', todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const todoId = todo._id;
    return this.http.put<Todo>(this.baseUrl + 'todo/' + todoId, todo);
  }
}
