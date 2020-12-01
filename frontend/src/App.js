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
import { starterItems } from "./components/data/menuItems";
import Item from "./components/Item";

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
      <Postcode />
      <BannerNav />
      <Section {...startersObj}>
        {starterItems.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </Section>
      <Section {...mainsObj}></Section>
      <Section {...dessertsObj}></Section>
      <Section {...extrasObj}></Section>
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
