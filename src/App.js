import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Home></Home>
    </div>
  );
}

export default App;
