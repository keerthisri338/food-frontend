import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddFood from "./pages/AddFood";
import ViewFood from "./pages/ViewFood";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewFood />} />
        <Route path="/add" element={<AddFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;