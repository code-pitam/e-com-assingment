import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import Card from './Card.'
import Nav from './Nav'
import { ProductContext } from './context/ProductContext'


function Home() {
    const [Produtd, setProdutd] = useState([])
const productData = useContext(ProductContext)
useEffect(() => {
setProdutd(productData?.ProductData)
console.log(productData);

 
}, [productData])

console.log(Produtd);

  return (
    <div className="container-home">
      {Produtd.map((option) => (
        <Card data={option}/>
      ))}
      {/* <Card /> */}
    </div>
  );
}

export default Home