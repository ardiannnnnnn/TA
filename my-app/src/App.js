import Layout from "./Layout/layout";
import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={""} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
