import React from 'react';
import Header from './components/Header';
import Statistics from './components/Statistics';
import OurClasses from './components/OurClasses';
import Calculator from './components/Calculator';
import Trainers from './components/Trainers';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Statistics />
      <OurClasses />
      <Calculator />
      <Trainers />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
