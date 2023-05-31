export interface ITodo {
  id: string;
  name: string;
  description: string;
  status: boolean;
}

export interface ITodoList {
  todos: ITodo[];
}