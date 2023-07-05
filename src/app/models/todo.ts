export interface ITodo {
  id: string;
  name: string;
  description: string;
  status: boolean;
}

export type INewTodo = Omit<ITodo, 'id'>;

export interface ITodoList {
  todos: ITodo[];
}

export class Todo {
  constructor(
    public name: string,
    public description: string,
    public status: boolean
  ) {}
}
