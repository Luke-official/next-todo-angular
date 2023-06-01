import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TodoService } from 'src/app/lib/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Array<any> = [];

  constructor(
    private todoService: TodoService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'plus',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Plus.svg'
      )
    );
  }

  ngOnInit(): void {
    this.getTodos();
    this.initTodoChangedSubscription();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((data) => (this.todos = data.todos));
  }

  initTodoChangedSubscription() {
    this.todoService.todoChanged.subscribe((data: boolean) => {
      if (data) {
        this.getTodos();
      }
    });
  }

  addButtonAsString = `<mat-icon [svgIcon]="plus"></mat-icon>`;
}
