import React, { useState } from "react";

function PizzaForm({ setNewObj }) {
  // console.log(setNewObj)
  const [formData, setFormData] = useState({
    topping: "",
    size: "small",
    vegetarian: false
  })
  // function onRadioButton(e) {

  //   setFormData({...formData, [formData.vegetarian]:e.target.checked})
  // }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("  http://localhost:4001/pizzas", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        topping: formData.topping,
        size: formData.size,
        vegetarian: formData.vegetarian
      })
    }).then(resp => resp.json())
      .then(data => setNewObj(data))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={formData.topping}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formData.size}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
            <option name="small" value="Small">Small</option>
            <option name="medium" value="Medium">Medium</option>
            <option name="large" value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={formData.vegetarian}
              onChange={(e)=>setFormData({ ...formData, [e.target.name]: e.target.checked })}
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!formData.vegetarian}
              onChange={(e)=>
                setFormData({ ...formData, [e.target.name]: e.target.checked })}
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
