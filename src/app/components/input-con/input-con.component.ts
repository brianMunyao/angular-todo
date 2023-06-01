import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-input-con',
  templateUrl: './input-con.component.html',
  styleUrls: ['./input-con.component.css'],
})
export class InputConComponent {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  @Output() formErrorEvent = new EventEmitter<string>();
  inputValue: string = '';

  onSubmit() {
    if (this.inputValue.length === 0) {
      this.formErrorEvent.emit('Enter todo');
      return;
    }
    this.formErrorEvent.emit('');
    const newTodo: Todo = {
      done: false,
      title: this.inputValue,
    };
    this.newTodoEvent.emit(newTodo);
    this.inputValue = '';
  }
}
