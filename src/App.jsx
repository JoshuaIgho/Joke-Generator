import React from 'react';
import Navbar from './components/navbar/navbar';
import MainContent from './components/Main/maincontent';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="content-wrapper">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;



  
