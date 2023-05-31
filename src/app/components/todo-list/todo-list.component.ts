import { Component } from '@angular/core';
import { TodoService } from 'src/app/lib/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Array<any> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos()
    this.initTodoChangedSubscription();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((data) => (this.todos = data.todos));
  }

  initTodoChangedSubscription() {
    this.todoService.todoChanged.subscribe((data: boolean) => {
        if(data) {
          this.getTodos();
        }
    });  

  }

}
