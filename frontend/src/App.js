import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/todos`,
          { method: "GET" }
        );
        const todos = await response.json();
        setTodos(todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    getTodos();
  }, []);

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <div>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div key={index}>
              <p>{todo.task}</p>
              <p>{todo.status ? "Completed" : "Pending"}</p>
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default App;
