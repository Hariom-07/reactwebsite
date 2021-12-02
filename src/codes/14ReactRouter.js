// npm install react-router-dom@5.2.0
// App1.jsx

import React from "react";
import { Routes, Route } from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";

const App1 = () => {
 
  return (
    <>
    <Menu />
      <Routes>
        <Route  path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>} />
      </Routes>

     {/* <About />
     <Contact /> */}
     
    </>
  );
};

export default App1;

// Menu.jsx

import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
 
  return (
    <>
       <NavLink exact activeClassName="active-class" to="/about"> AboutUs </NavLink>
       <br />
       <NavLink exact activeClassName="active-class" to="/contact"> ContactUs </NavLink>
       <br />

        {/* <a href="/about"> AboutUs </a>
        <a href="/contact"> ContactUs </a> */}
   
    </>
  );
};

export default Menu;
