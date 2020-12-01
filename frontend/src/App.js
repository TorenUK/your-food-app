import React, { useState } from "react";

//components
import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import BannerNav from "./components/BannerNav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import Postcode from "./components/Postcode";

// other
import {
  startersObj,
  mainsObj,
  dessertsObj,
  extrasObj,
} from "./components/data/data";
import Item from "./components/Item";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [starters] = useState([
    { name: "chilli paneer", price: 4.99 },
    { name: "mixed kebab", price: 4.99 },
    { name: "vegetarian samosas", price: 4.99 },
    { name: "poppadums", price: 4.99 },
  ]);

  const toggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app">
      {showSidebar && <Sidebar toggle={toggle} />}
      <Nav toggle={toggle} />
      <Banner />
      <Postcode />
      <BannerNav />
      <Section {...startersObj}>
        {starters.map((item, idx) => (
          <Item key={idx} name={item.name} price={item.price} />
        ))}
      </Section>
      <Section {...mainsObj}>
        {starters.map((item, idx) => (
          <Item key={idx} name={item.name} price={item.price} />
        ))}
      </Section>
      <Section {...dessertsObj}>
        {starters.map((item, idx) => (
          <Item key={idx} name={item.name} price={item.price} />
        ))}
      </Section>
      <Section {...extrasObj}>
        {starters.map((item, idx) => (
          <Item key={idx} name={item.name} price={item.price} />
        ))}
      </Section>
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
