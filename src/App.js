import { BrowserRouter } from "react-router-dom";
import './App.css';

import Navbar from "./routers/Navbar.js";
import Home from "./routers/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <>
      <Home/>
      </>
    </div>
  );
}

export default App;
