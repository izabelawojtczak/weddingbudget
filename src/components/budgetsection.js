import React from 'react';
import '../styles/budgetsection.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BudgetSection({ totalCost, totalBudget, onBudgetChange, onOpenModal }) {
  const handleBudgetChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      onBudgetChange(e);
    }
  };

  return (
    <div className="budget-section">
      <h2>Your set wedding budget</h2>
      <div className="budget-item">
        <p style={{ fontSize: '36px', color: totalCost > totalBudget ? 'red' : 'black' }}>
          {totalCost}/ 
          <input 
            type="number" 
            value={totalBudget} 
            onChange={handleBudgetChange} 
            style={{ fontSize: '36px', textAlign: 'center' }}
            min="0"
          /> 
          zł
        </p>
        {totalCost > totalBudget && (
          <div className='alert alert-danger' key="danger">
            You have exceeded your budget!
          </div>
        )}
      </div>
      <Button variant="secondary" size="lg" onClick={onOpenModal}>Add New Cost</Button>
    </div>
  );
}

export default BudgetSection;

