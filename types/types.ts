export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  date: string;
  categoryId: Category['id'];
}

export type Category = {
  id: number;
  title: string;
}

export type Header = {
  title: string;
}
