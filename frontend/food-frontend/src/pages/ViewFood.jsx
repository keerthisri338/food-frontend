import { useEffect, useState } from "react";
import { getFood } from "../services/api";

function ViewFood() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFood().then(res => setFoods(res.data));
  }, []);

  return (
    <div>
      <h2>Food List</h2>

      {foods.map(f => (
        <div key={f.id}>
          {f.foodName} - {f.quantity}
        </div>
      ))}
    </div>
  );
}

export default ViewFood;