"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="double-gradient-box">
      <div
        style={{
          padding: "20px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h1 style={{ marginTop: "400px", marginBottom: "30px" }}>
          Next.js Todo List
        </h1>
        <div
          style={{
            marginBottom: "50px",
            background: "linear-gradient(to right,black,white)",
          }}
        >
          <input
            className="myInput"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
            style={{
              padding: "10px",
              marginRight: "10px",
              width: "80%",
              border: "none",
              backgroundColor: "transparent",
              color: "wheat",
            }}
          />
          <button
            onClick={addTodo}
            style={{
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            Add
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #ddd",

                color: todo.completed ? "white" : "black",
                background: "linear-gradient(to right, chocolate , wheat)",
                borderRadius: "12px",
                marginBottom: "10px",
              }}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.completed ? "✅ " : "🔲 "}
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                style={{
                  color: "red",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
