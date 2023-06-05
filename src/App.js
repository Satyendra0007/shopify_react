import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import LandingPage from './Component/LandingPage';
import ProductList from './Component/ProductList';
import Contact from './Component/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>

      </>
    )
  }
}

export default App