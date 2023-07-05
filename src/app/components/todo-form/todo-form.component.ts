import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INewTodo, Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  formSubmitted: boolean = false;

  todoForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    status: [false, Validators.required],
  });

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.formSubmitted = true;

    if (this.todoForm.valid) {
      this.addTodo({
        name: this.todoForm.value.name ? this.todoForm.value.name : null,
        description: this.todoForm.value.description
          ? this.todoForm.value.description
          : null,
        status: this.todoForm.value.status ? this.todoForm.value.status : null,
      });
    }

    console.warn('Your todo has been submitted', this.todoForm.value);
    this.todoForm.reset();
  }

  addTodo(todo: INewTodo) {
    this.todoService.addTodo(todo).subscribe(() => {
      this.todoService.todoChanged.next(true);
    });
  }
}
