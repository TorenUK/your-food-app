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
import SignUp from "./components/SignUp";
import Item from "./components/Item";

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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // toast
  const notify = (name, quantity) =>
    toast.dark(`${quantity} x ${name} added to cart`);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="app">
      {showSidebar && (
        <Sidebar
          toggleSignUp={toggleSignUp}
          toggleLogin={toggleLogin}
          toggleSidebar={toggleSidebar}
        />
      )}
      <Nav
        toggleSignUp={toggleSignUp}
        toggleLogin={toggleLogin}
        toggleSidebar={toggleSidebar}
      />
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
            description={item.description}
            notify={notify}
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
            description={item.description}
            notify={notify}
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
            description={item.description}
            notify={notify}
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
            description={item.description}
            notify={notify}
          />
        ))}
      </Section>
      <Footer />
      <Chat />
      {showLogin && <Login toggleLogin={toggleLogin} />}
      {showSignUp && <SignUp toggleSignUp={toggleSignUp} />}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}

export default App;
