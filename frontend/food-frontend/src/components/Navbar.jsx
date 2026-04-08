import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> | 
      <Link to="/add">Add Food</Link>
    </div>
  );
}

export default Navbar;