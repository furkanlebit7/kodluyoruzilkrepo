import React from "react";

function ToDoFooter({
  todos,
  categoryHandler,
  activeCategory,
  clearCompleted,
}) {
  const activeTodos = todos.filter((todo) => todo.done == false);
  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>{activeTodos.length} </strong>
        item{activeTodos.length > 1 && "s"} left
      </span>

      <ul class="filters">
        <li onClick={() => categoryHandler("All")}>
          <a class={activeCategory === "All" && "selected"}>All</a>
        </li>
        <li onClick={() => categoryHandler("Active")}>
          <a class={activeCategory === "Active" && "selected"}>Active</a>
        </li>
        <li onClick={() => categoryHandler("Completed")}>
          <a class={activeCategory === "Completed" && "selected"}>Completed</a>
        </li>
      </ul>
      {todos.some((todo) => todo.done === true) && (
        <button class="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default ToDoFooter;
