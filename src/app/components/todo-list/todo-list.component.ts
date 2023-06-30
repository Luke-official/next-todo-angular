import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal/modal.service';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Array<any> = [];

  constructor(
    private todoService: TodoService,
    private modalService: ModalService,
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

  toggleModal() {
    this.modalService.toggleModalOpen();
  }

  addButtonAsString = `<mat-icon [svgIcon]="plus"></mat-icon>`;
}
