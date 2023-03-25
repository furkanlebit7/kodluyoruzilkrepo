import React from "react";

function ToDoFooter({
  todos,
  categoryHandler,
  activeCategory,
  clearCompleted,
}) {
  const activeTodos = todos.filter((todo) => todo.done === false);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodos.length} </strong>
        item{activeTodos.length > 1 && "s"} left
      </span>

      <ul className="filters">
        <li onClick={() => categoryHandler("All")}>
          <a className={activeCategory === "All" && "selected"}>All</a>
        </li>
        <li onClick={() => categoryHandler("Active")}>
          <a className={activeCategory === "Active" && "selected"}>Active</a>
        </li>
        <li onClick={() => categoryHandler("Completed")}>
          <a className={activeCategory === "Completed" && "selected"}>
            Completed
          </a>
        </li>
      </ul>
      {todos.some((todo) => todo.done === true) && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default ToDoFooter;
