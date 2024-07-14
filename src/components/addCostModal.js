import React, { useState } from 'react';
import '../styles/addCostModal.css';
import Button from 'react-bootstrap/Button';

function AddCostModal({ onClose, onAddCost }) {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseFloat(price) < 0 || parseInt(quantity) < 0) {
      setError('Price and quantity must be positive numbers.');
      return;
    }
    const newCost = {
      itemName,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };
    onAddCost(newCost);
  };

  const handleProposedItemClick = (name) => {
    setItemName(name);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Cost</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              min="0"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              min="0"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <div className="modal-buttons">
            <Button variant="secondary" size="lg" type="submit">Add</Button>
            <Button variant="secondary" size="lg" type="button" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
        <div className="proposed-items">
          <h3>Popular Wedding Costs:</h3>
          <Button type="button" variant="outline-secondary" onClick={() => handleProposedItemClick('Wedding Hall')}>Wedding Hall</Button>
          <Button type="button" variant="outline-secondary" onClick={() => handleProposedItemClick('DJ')}>DJ</Button>
          <Button type="button" variant="outline-secondary" onClick={() => handleProposedItemClick('Catering')}>Catering</Button>
          <Button type="button" variant="outline-secondary" onClick={() => handleProposedItemClick('Flowers')}>Flowers</Button>
          <Button type="button" variant="outline-secondary" onClick={() => handleProposedItemClick('Wedding rings')}>Wedding rings</Button>
          <Button type="button" variant="outline-secondary" onClick={() => handleProposedItemClick('Invitations')}>Invitations</Button>
          <Button type="button" variant="outline-secondary" onClick={() => handleProposedItemClick('Cake')}>Cake</Button>
        </div>
      </div>
    </div>
  );
}

export default AddCostModal;
