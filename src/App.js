import React, { useState } from "react";
import "./App.css"; // your current CSS file

function App() {
  // Login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Todo states
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleLogin = () => {
    // Example: Static credentials (replace with real authentication later)
    if (email === "test@gmail.com" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password!");
    }
  };

  const addTask = () => {
    if (!task.trim()) return;
    setTodo([...todo, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  // Login Page
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>Login to Continue</h2>
        <input
          type="email"
          placeholder="Enter Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // To-do page
  return (
    <div className="app-container">
      <h2>To-Do List</h2>
      <div className="input-row">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {todo.length === 0 ? (
          <p className="no-tasks">No tasks available</p>
        ) : (
          todo.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />
              {item.completed ? <s>{item.text}</s> : item.text}
              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
