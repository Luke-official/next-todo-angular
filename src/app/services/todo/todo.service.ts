import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError } from 'rxjs';
import { INewTodo, ITodo, ITodoList } from 'src/app/models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private URL = environment.apiUrl;
  public todoChanged: Subject<boolean>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    this.todoChanged = new Subject<boolean>();
  }

  getTodos(): Observable<ITodoList> {
    return this.http.get<ITodoList>(this.URL + '/todos').pipe(
      catchError((error: any): Observable<any> => {
        console.error('There was an error!', error);
        return error;
      })
    );
  }

  addTodo(newTodo: INewTodo): Observable<any> {
    return this.http.post<any>(this.URL + '/add-todo', newTodo).pipe(
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

  deleteTodo(todo: ITodo): Observable<any> {
    return this.http.delete<any>(`${this.URL}/delete-todo/${todo.id}`).pipe(
      catchError((error) => {
        throw new Error(error);
      })
    );
  }
}
