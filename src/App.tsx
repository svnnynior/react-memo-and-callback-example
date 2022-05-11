import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

type TodoItem = {
  id: number;
  label: string;
  isDone: boolean;
};

const updateTodoList = (list: TodoItem[], item: TodoItem): TodoItem[] => {
  return list.map((todo) => {
    return todo.id === item.id ? { ...item, isDone: !item.isDone } : todo;
  });
};

type TodoProps = {
  todo: TodoItem;
  onTap: (todo: TodoItem) => void;
};

const Todo: React.FC<TodoProps> = ({ todo, onTap }) => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  return (
    <div className="todo-item-container" onClick={() => onTap(todo)}>
      <div className="todo-item">
        {todo.isDone ? (
          <span role="img" aria-label="checkmark">
            ✅
          </span>
        ) : null}
        <span className="todo-label">{todo.label}</span>
      </div>
      <span className="render-count">{renderCountRef.current}</span>
    </div>
  );
};

export default function TodoList() {
  const initialTodos: TodoItem[] = [
    {
      id: 1,
      label: "exercise",
      isDone: false
    },
    {
      id: 2,
      label: "homework",
      isDone: false
    },
    {
      id: 3,
      label: "clean the room",
      isDone: false
    }
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="App">
      <h1>Yet Another To-do List</h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onTap={(todo) =>
              setTodos((currentTodos) => updateTodoList(currentTodos, todo))
            }
          />
        ))}
      </ul>
    </div>
  );
}
