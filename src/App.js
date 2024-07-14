import React, { useState } from 'react';
import Menu from './components/menu';
import Header from './components/header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';
import MainBudget from './components/mainbudget';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [costs, setCosts] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCost = (newCost) => {
    setCosts([...costs, { ...newCost, status: 'Unpaid' }]);
    setIsModalOpen(false);
  };

  const handleToggleStatus = (index) => {
    const newCosts = [...costs];
    newCosts[index].status = newCosts[index].status === 'Unpaid' ? 'Paid' : 'Unpaid';
    setCosts(newCosts);
  };

  return (
    <div id="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Menu />
    <div className="App">
      <div className="main-content">
        <Header />
          <Routes>
            <Route path="/" element={<MainBudget />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>  
      </div>
    </div>
    </div>
  )
};

export default App;