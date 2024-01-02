import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./home.css";
import Card from "./Card.";
import Nav from "./Nav";

function Home() {
  const [Produtd, setProdutd] = useState([]);

  const data = useSelector((state) => state.products);

  useEffect(() => {
    setProdutd(data.products);
  }, [data]);

  return (
    <div className="container-home">
      {Produtd?.map((option) => (
        <Card key={option.id} data={option} />
      ))}
    </div>
  );
}

export default Home;
