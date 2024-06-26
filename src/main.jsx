import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { fetchUsers } from "./pages/users/userSlice";
import { fetchPosts } from "./pages/posts/postSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />{" "}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);