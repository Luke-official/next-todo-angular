import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/lib/todo/todo.service';
import { ITodo } from 'src/app/models/todo';

type dropdownItemType = {
  name: string;
  icon: string;
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: ITodo = {
    id: '',
    name: '',
    description: '',
    status: false,
  };
  @Input() toggleTodo: any;
  @Input() deleteTodo: any;
  @Input() updateTodo: any;

  todoActions: dropdownItemType[] = [
    { name: 'Modifica', icon: 'pencil' },
    { name: 'Elimina', icon: 'trash' },
  ];

  constructor() {}
}
