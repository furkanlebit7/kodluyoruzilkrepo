import { useState } from "react";
import { v4 as uuid } from "uuid";

function ToDoHeader({ addTodo }) {
  const [text, setText] = useState();

  //adds new todo on submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      text: text,
      done: false,
    };
    // console.log(todo);
    addTodo(todo);
    setText("");
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </header>
  );
}

export default ToDoHeader;
