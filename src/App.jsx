import { useEffect } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "./store/allProcuctSlice";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
      <Cart/>

      {/* <Login/> */}
    </>
  );
}

export default App;
