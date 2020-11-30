import React, { useState } from "react";

//components
import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app">
      {showSidebar && <Sidebar toggle={toggle} />}
      <Nav toggle={toggle} />
      <Banner />
    </div>
  );
}

export default App;
