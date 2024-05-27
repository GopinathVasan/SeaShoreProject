import './App.css';
import Navbar from "./routers/Navbar.js";
import Home from "./routers/Home";
import Service from "./routers/Service.js";
import About from "./routers/About.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <>
      <Home/>
      <Service/>
      <About/>
      </>
    </div>
  );
}

export default App;
