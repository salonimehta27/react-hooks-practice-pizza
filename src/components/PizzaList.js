import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzaData }) {
  console.log(pizzaData)
  const pizzaList = pizzaData.map(pizza => <Pizza key={pizza.id}
    topping={pizza.topping}
    size={pizza.size}
    vegetarian={pizza.vegetarian}></Pizza>)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaList
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
