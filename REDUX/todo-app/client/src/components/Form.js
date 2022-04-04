import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../redux/todos/todoService";
import Loading from "./Loading";
import Error from "./Error";

function Form() {
  const [title, setTitle] = useState("");
  const isLoading = useSelector((state) => state.todos.addNewTodoLoading);
  const error = useSelector((state) => state.todos.addNewTodo.addNewTodoError);

  const hangleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await dispatch(addTodoAsync({ title }));
    setTitle("");
  };

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={hangleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        disabled={isLoading}
        value={title}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}

export default Form;
