import React, { useState } from "react";

//components
import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import BannerNav from "./components/BannerNav";
import Section from "./components/Section";

// other
import {
  startersObj,
  mainsObj,
  dessertsObj,
  extrasObj,
} from "./components/data/data";

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
      <BannerNav />
      <Section {...startersObj} />
      <Section {...mainsObj} />
      <Section {...dessertsObj} />
      <Section {...extrasObj} />
    </div>
  );
}

export default App;
