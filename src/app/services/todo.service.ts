import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      this.apiUrl,
      { id: Math.floor(Math.random() * (100000 + 1)), ...todo },
      httpOptions
    );
  }
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.apiUrl + '/' + todo.id, todo, httpOptions);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.apiUrl + '/' + todo.id);
  }
}
