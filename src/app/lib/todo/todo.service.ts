import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ITodo, ITodoList } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private URL = 'http://localhost:4000/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodoList> {
    return this.http.get<ITodoList>(this.URL + '/todos').pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return error;
      })
    );
  }

  toggleTodo(todo: ITodo): Observable<any> {
    const todoUpdate = { ...todo, status: !todo.status };
    return this.http
      .put<any>(`${this.URL}/edit-todo/${todo.id}`, todoUpdate)
      .pipe(
        catchError((error) => {
          throw new Error(error);
        })
      );
  }
}
