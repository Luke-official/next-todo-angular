import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/lib/todo/todo.service';
import { ITodo } from 'src/app/models/todo';



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

  constructor(private todoService: TodoService) {}

  toggleTodo(todo: ITodo) {
    this.todoService.toggleTodo(todo).subscribe((data) => console.log(data));
  }
}
