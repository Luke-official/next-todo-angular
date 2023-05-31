import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TodoService } from 'src/app/lib/todo/todo.service';
import { ITodo } from 'src/app/models/todo';

type dropdownItemType = {
  name: string;
  icon: string;
};

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
})

export class MenuDropdownComponent {
  @Input() todo!: ITodo;
  dropdownIsVisible: boolean = false;
  dropdownItems: dropdownItemType[] = [
    { name: 'Modifica', icon: 'pencil' },
    { name: 'Elimina', icon: 'trash' },
  ];

  @ViewChild('dropdownElement') dropdownElement: ElementRef | undefined;
  
  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement) {
    const clickedInside = this.dropdownElement?.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.dropdownIsVisible = false;
    }
  }

  constructor(
    private todoService: TodoService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'pencil',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Pencil.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'trash',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Trash.svg'
      )
    );
  }

  toggleVisibility = () => this.dropdownIsVisible = !this.dropdownIsVisible
  

  updateTodo(todo:ITodo){
    console.log("Updating", todo)
  }

  deleteTodo(todo: ITodo){
    this.todoService.deleteTodo(todo).subscribe(() => 
      this.todoService.todoChanged.next(true))
  }
}
