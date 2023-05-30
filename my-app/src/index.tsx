import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoForm from "./components/TodoForm/TodoForm";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
  {
    path: "/todos/:todoId/edit",
    element: <TodoForm /> ,
  }
]);
root.render(
  <React.StrictMode>    
    <RouterProvider router={router} />   
  </React.StrictMode>
);