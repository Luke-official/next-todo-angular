import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatIconModule } from '@angular/material/icon';
import { TodoService } from './lib/todo/todo.service';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SwitchThemeComponent,
    TodoListComponent,
    TodoComponent,
    DropdownComponent,
    ButtonComponent,
    ModalComponent,
    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
