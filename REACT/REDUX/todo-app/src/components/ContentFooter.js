import React from "react";

function ContentFooter() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>2 </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a className="selected">All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default ContentFooter;
