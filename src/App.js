import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Search from "./Pages/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;