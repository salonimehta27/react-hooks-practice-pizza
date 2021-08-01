import React,{useState} from "react";

function Pizza({ topping, size, vegetarian }) {
  const[isEditing,setIsEditing]=useState(false)
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "YES" : "NO"}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
