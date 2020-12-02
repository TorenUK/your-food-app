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
import Login from "./components/Login";

// other
import {
  startersObj,
  mainsObj,
  dessertsObj,
  extrasObj,
} from "./components/data/data";
import {
  starterItems,
  mainItems,
  dessertItems,
  extraItems,
} from "./components/data/menuItems";
import Item from "./components/Item";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="app">
      {showSidebar && (
        <Sidebar toggleLogin={toggleLogin} toggleSidebar={toggleSidebar} />
      )}
      <Nav toggleLogin={toggleLogin} toggleSidebar={toggleSidebar} />
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
      <Section {...mainsObj}>
        {mainItems.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </Section>
      <Section {...dessertsObj}>
        {dessertItems.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </Section>
      <Section {...extrasObj}>
        {extraItems.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </Section>
      <Footer />
      <Chat />
      {showLogin && <Login toggleLogin={toggleLogin} />}
    </div>
  );
}

export default App;
