import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { Todo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Output() updateTodoEvent = new EventEmitter<Todo>();
  @Output() deleteTodoEvent = new EventEmitter<Todo>();
  @Input() todo!: Todo;
  faCircle = faCircle;
  faCircleCheck = faCircleCheck;
  faTrashCan = faTrashCan;

  todoUpdate() {
    this.updateTodoEvent.emit({ ...this.todo, done: !this.todo.done });
  }
  todoDelete() {
    this.deleteTodoEvent.emit(this.todo);
  }
}
