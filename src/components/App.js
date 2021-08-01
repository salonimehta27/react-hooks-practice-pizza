import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaData, setPizzaData] = useState([]);

  function handleNewObj(newObj) {
    setPizzaData([...pizzaData, newObj])
  }


  useEffect(() => {
    fetch("http://localhost:4001/pizzas")
      .then(resp => resp.json())
      .then(data => setPizzaData(data))
  }, [])
  return (
    <>
      <Header />
      <PizzaForm setNewObj={handleNewObj} />
      <PizzaList pizzaData={pizzaData} />
    </>
  );
}

export default App;
