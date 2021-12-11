import React from "react";

function ToDoBody({ todos, handleTodoDone, removeTodo }) {
  return (
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>

      <ul class="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} class={todo.done ? "completed" : null}>
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
                onClick={() => handleTodoDone(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                onClick={() => removeTodo(todo.id)}
                class="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ToDoBody;
