import { Component } from '@angular/core';

import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo';

  formError = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo(newTodo: Todo) {
    this.todoService.addTodo(newTodo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }

  appUpdateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe((todo) => {
      this.todos = this.todos.map((t) => (t.id === todo.id ? todo : t));
    });
  }

  appDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

  addError(err: string) {
    this.formError = err;
  }
}
