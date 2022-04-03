import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

function Form() {
  const [title, setTitle] = useState("");

  const hangleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    dispatch(addTodo({ id: nanoid(10), title, completed: false }));
    setTitle("");
  };

  const dispatch = useDispatch();

  return (
    <form onSubmit={hangleSubmit}>
      <input
        value={title}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default Form;
