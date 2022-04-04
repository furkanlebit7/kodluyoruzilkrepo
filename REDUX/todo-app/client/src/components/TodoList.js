import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectFilteredTodos } from "../redux/todos/todosSlice";
import {
  getTodosAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from "../redux/todos/todoService";
import Loading from "./Loading";
import Error from "./Error";

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(removeTodoAsync(id));
    }
  };

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              checked={item.completed}
              className="toggle"
              type="checkbox"
              onChange={() => handleToggle(item.id, !item.completed)}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
