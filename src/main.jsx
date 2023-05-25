import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice"
import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorage';

import "./index.css"

import HomePage from './pages/HomePage.jsx';
import ActivePage from './pages/ActivePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import Layout from './components/Layout.jsx';
import CompletedPage from './pages/CompletedPage.jsx';
import AllPage from './pages/AllPage.jsx';


const store =  configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
        <Route index={true} element={<AllPage/>} />
        <Route path='active' element={<ActivePage />} />
        <Route path='completed' element={<CompletedPage />} />
      </Route>
      <Route path='/pure-react' element={<HomePage/>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
