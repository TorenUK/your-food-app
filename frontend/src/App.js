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
import Order from "./components/Order";
import Checkout from "./components/Checkout";
import About from "./components/About";

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

// redux
import { useSelector } from "react-redux";
import { selectOrder } from "./features/order/orderSlice";
import { selectUser } from "./features/user/userSlice";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const order = useSelector(selectOrder);

  // toast
  const notify = (name, quantity) =>
    toast.dark(`${quantity} x ${name} added to order`);

  // *DRY ISSUES WILL BE RECTIFIED SOON (⌐■_■)* //
  const accountCreated = (email) => {
    toast.dark(`${email} successfully created an account`);
  };

  const userLogin = (email) => {
    toast.dark(`signed in to ${email}`);
  };

  const userLogout = (email) => {
    toast.dark(`logged out of account ${email}`);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleLogin = () => {
    if (!showSignUp) {
      setShowLogin(!showLogin);
    }
  };
  const toggleSignUp = () => {
    if (!showLogin) {
      setShowSignUp(!showSignUp);
    }
  };
  const toggleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <div className="app">
      {showSidebar && (
        <Sidebar
          toggleSignUp={toggleSignUp}
          toggleLogin={toggleLogin}
          toggleSidebar={toggleSidebar}
          userLogout={userLogout}
        />
      )}
      <Nav
        toggleSignUp={toggleSignUp}
        toggleLogin={toggleLogin}
        toggleSidebar={toggleSidebar}
        userLogout={userLogout}
      />
      <Banner />
      <Postcode />
      {order.length ? <Order toggleCheckout={toggleCheckout} /> : null}
      {showCheckout && <Checkout toggleCheckout={toggleCheckout} />}
      <BannerNav />
      <Section {...startersObj}>
        {starterItems.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            id={item.id}
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
            id={item.id}
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
            id={item.id}
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
            id={item.id}
            notify={notify}
          />
        ))}
      </Section>
      <About />
      <Footer />
      <Chat />
      {showLogin && <Login userLogin={userLogin} toggleLogin={toggleLogin} />}
      {showSignUp && (
        <SignUp accountCreated={accountCreated} toggleSignUp={toggleSignUp} />
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
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
