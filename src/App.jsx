import { useState } from 'react';
import Todo from "./components/Todo";
import "./App.css";
import Todoform from './components/Todoform';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar linguagem de programação Ruby",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Criar projetos para portfólio",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <Todoform />
    </div>
  );
}

export default App