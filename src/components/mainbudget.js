import React, { useState, useEffect } from 'react';
import BudgetSection from './budgetsection';
import CostOverview from './costoverview';
import AddCostModal from './addCostModal';
import '../styles/mainbudget.css';

const MainBudget = () => {
    const [totalBudget, setTotalBudget] = useState(() => {
        const savedBudget = localStorage.getItem('totalBudget');
        return savedBudget ? Number(savedBudget) : 0; 
    });

    const [costs, setCosts] = useState(() => {
        const savedCosts = localStorage.getItem('costs');
        return savedCosts ? JSON.parse(savedCosts) : [
        ]; 
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('totalBudget', totalBudget);
    }, [totalBudget]);

    useEffect(() => {
        localStorage.setItem('costs', JSON.stringify(costs));
    }, [costs]);

    const handleBudgetChange = (e) => {
      setTotalBudget(Number(e.target.value));
    };

    const handleToggleStatus = (index) => {
      const newCosts = [...costs];
      newCosts[index].status = newCosts[index].status === 'Unpaid' ? 'Paid' : 'Unpaid';
      setCosts(newCosts);
    };

    const handleDelete = (index) => {
      const newCosts = costs.filter((_, i) => i !== index);
      setCosts(newCosts);
    };

    const handleAddCost = (newCost) => {
      setCosts([...costs, { ...newCost, status: 'Unpaid' }]);
      setIsModalOpen(false);
    };

    const totalCost = costs.reduce((sum, cost) => sum + (cost.price * cost.quantity), 0);

    return (
      <div className="mainBudget">
        <CostOverview costs={costs} onToggleStatus={handleToggleStatus} onDelete={handleDelete} />
        <BudgetSection
          totalCost={totalCost}
          totalBudget={totalBudget}
          onBudgetChange={handleBudgetChange}
          onOpenModal={() => setIsModalOpen(true)}
        />
        {isModalOpen && <AddCostModal onClose={() => setIsModalOpen(false)} onAddCost={handleAddCost} />}
      </div>
    );
};

export default MainBudget;
