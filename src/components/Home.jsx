import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./home.css";
import Card from "./Card.";
import Nav from "./Nav";

function Home() {
  const [Produtd, setProdutd] = useState([]);
  const [FilterData, setFilterData] = useState();
  const data = useSelector((state) => state.products);
  console.log(data);

  useEffect(() => {
    setProdutd(data.products);
  }, [data]);

  const filteredProducts = (e) => {
    console.log(e.target.value);

    const query = e.target.value;
    var updatedList = [...Produtd];
    console.log(updatedList);
    updatedList = updatedList.filter((item) => {
      return item?.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilterData(updatedList);
    console.log(updatedList);
  };

  console.log(Produtd);

  return (
    <div className="home">
      <input
        onChange={filteredProducts}
        type="search"
        name="search"
        id="search"
        placeholder="search product"
      />

      <div className="container-home">
        {FilterData
          ? FilterData.map((option) => <Card data={option} />)
          : Produtd?.map((option) => <Card data={option} />)}
      </div>
    </div>
  );
}

export default Home;
