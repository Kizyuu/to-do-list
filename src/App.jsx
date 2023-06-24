import { useState } from 'react'

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
  ])
  return <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo)=>(
          <div className="todo">
            <div className="content"><p>{todo.text}</p>
              <p className="category">({todo.category})</p>
              </div>
              <div>
                <button>Completar</button>
                <button>x</button>
              </div>
            </div>
        ))}
      </div>
    </div>
}

export default App
