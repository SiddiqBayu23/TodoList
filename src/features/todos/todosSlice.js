import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    userInput: "",
  },
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload.userInput;
    },
    createTodo: (state) => {
      if (state.userInput === "") return;

      const newTodo = {
        id: uniqueId(),
        content: state.userInput,
        completed: false,
      };

      state.todos.push(newTodo);
      state.userInput = "";
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    //...other reducers (Edit Todo, etc.)
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.content = action.payload.content;
      }
    },
  },
});

// export const { createTodo, toggleTodo, deleteTodo, setUserInput } = todosSlice.actions;
export const actions = todosSlice.actions;

export default todosSlice.reducer;