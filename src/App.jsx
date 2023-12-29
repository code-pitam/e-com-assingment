import { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import './App.css'
import { ProductProvider } from "./components/context/ProductContext";



function App() {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
   fetch("https://dummyjson.com/products")
     .then((res) => res.json())
     .then((res) => setProductData(res?.products));
    // setPdata(Data)
  
    
  }, [])
      console.log(ProductData);


  return (
    <>
      <ProductProvider value={{ ProductData }}>
        <Nav />
        <Outlet />
      </ProductProvider>

      {/* <Login/> */}
    </>
  );
}

export default App;
