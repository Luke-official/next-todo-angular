import { Component } from '@angular/core';
import { TodoService } from 'src/app/lib/todo/todo.service';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Array<any> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((data) => (this.todos = data.todos));
  }

  toggleTodo(todo: ITodo) {
    this.todoService.toggleTodo(todo).subscribe((data) => console.log(data));
  }
}
