import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import HomeContextProvider from './Context/HomeContext';



function App() {


  return (
    <div className="App">
      <HomeContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          </Routes>
        


      </Router>
      </HomeContextProvider>
    </div>
  )
}

export default App
