
import './App.css';
import React from 'react';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Form from './components/Form';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
       <Slider />
      <Home />
      <Cart />
      <Footer />
     
      </CartProvider>

     
    
    </div>
  );
}

export default App;
