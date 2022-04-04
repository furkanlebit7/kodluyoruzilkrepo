import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoAsync,
  getTodosAsync,
  removeAllTodosAsync,
  removeTodoAsync,
  toggleTodoAsync,
} from "./todoService";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: localStorage.getItem("activeFilter"),
    isLoading: false,
    error: null,
    addNewTodo: {
      addNewTodoLoading: false,
      addNewTodoError: null,
    },
  },
  reducers: {
    /*
    addTodo Kısmını artık backend tarafında hallettiğimiz için buradan kaldırdık
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      //payload reducer tarafına düşüp eklenmeden önce prepare tarafına düşer ve burada yapılandırılabilir
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            title,
          },
        };
      },
    },
    */
    /*
    toggle işlemini backend tarafına taşıdık o yüzden burayı kaldırıyoruz
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    */

    /*
    // backend tarafında hallediyoruz
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },*/
    /*
    //backend tarafında hallediyoruz
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
    */
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    //get Todos
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //add Todo
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodo.addNewTodoLoading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.addNewTodo.addNewTodoLoading = false;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodo.addNewTodoLoading = false;
      state.addNewTodo.addNewTodoError = action.error.message;
    },
    //toggle Todo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    //remove Todo
    [removeTodoAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    //remove AllTodos
    [removeAllTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};

export const { addTodo, toggle, destroy, clearCompleted, changeActiveFilter } =
  todosSlice.actions;
export default todosSlice.reducer;
