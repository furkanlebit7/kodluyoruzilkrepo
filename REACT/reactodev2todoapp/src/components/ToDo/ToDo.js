import { useEffect, useState } from "react";

import ToDoBody from "./ToDoBody/ToDoBody";
import ToDoFooter from "./ToDoFooter/ToDoFooter";
import ToDoHeader from "./ToDoHeader/ToDoHeader";

function ToDo() {
  //ToDo ların hepsini tutar
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //todolar için tamamlandı,tamamlanmadı toggle ı sağlar
  const handleTodoDone = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.done = !updatedTodo.done;
    const newTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
    setTodos(newTodos);
  };

  //Yeni Todo Ekler
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  //istenilen kategorinin todosunu tutar
  const [activeCategory, setActiveCategory] = useState("All");

  //todoları istenilen duruma göre kategorize eder
  const categorizedToDos =
    activeCategory === "All"
      ? todos
      : activeCategory === "Active"
      ? todos.filter((todo) => todo.done === false)
      : todos.filter((todo) => todo.done === true);

  //güncel kategoriyi değiştirir
  const categoryHandler = (category) => {
    setActiveCategory(category);
  };

  //tamamlanmış todoları siler
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.done === false));
  };

  return (
    <div className="todoapp">
      <ToDoHeader addTodo={addTodo} />
      <ToDoBody
        todos={categorizedToDos}
        handleTodoDone={handleTodoDone}
        removeTodo={removeTodo}
      />
      <ToDoFooter
        todos={categorizedToDos}
        categoryHandler={categoryHandler}
        activeCategory={activeCategory}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default ToDo;
