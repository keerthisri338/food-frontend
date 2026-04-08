import { useState } from "react";
import { addFood } from "../services/api";

function AddFood() {
  const [food, setFood] = useState({
    name: "",
    price: ""
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(food)
      .then(() => alert("Food added"))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"   // ✅ MUST MATCH BACKEND FIELD
        placeholder="Food Name"
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"  // ✅ MUST MATCH BACKEND FIELD
        placeholder="Price"
        onChange={handleChange}
      />

      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFood;