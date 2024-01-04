import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./components/auth/Login.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import PrivateRoutes from "./utils/PrivetRoutes.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />}>
            {" "}
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
