import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Quote from "./components/quote";
import Reviews from "./components/reviews";
import Services from "./components/services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
