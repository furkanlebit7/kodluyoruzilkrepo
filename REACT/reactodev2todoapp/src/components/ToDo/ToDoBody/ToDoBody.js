import React from "react";

function ToDoBody({ todos, handleTodoDone, removeTodo }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      {/* returns all todo elements */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "completed" : null}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => handleTodoDone(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                onClick={() => removeTodo(todo.id)}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ToDoBody;
