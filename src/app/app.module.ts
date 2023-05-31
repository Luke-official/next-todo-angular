import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { MatIconModule } from '@angular/material/icon';
import { TodoService } from './lib/todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SwitchThemeComponent,
    TodoListComponent,
    TodoComponent,
    MenuDropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
