import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // buat provider untuk menampung redux store, dan juga pake browser router untuk react router
  <Provider store={store}>  
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
