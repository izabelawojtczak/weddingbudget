import React from 'react';
import '../styles/costoverview.css';
import Button from 'react-bootstrap/Button';

function CostOverview({ costs, onToggleStatus, onDelete }) {
  const totalCost = costs.reduce((sum, cost) => sum + (cost.price * cost.quantity), 0);

  return (
    <div className="cost-overview">
      <h2>Wedding Costs</h2>
      <table className="cost-table">
        <thead>
          <tr>
            <th>Wedding service</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {costs.map((cost, index) => (
            <tr key={index}>
              <td>{cost.itemName}</td>
              <td>{cost.price.toFixed(2)} zł</td>
              <td>{cost.quantity}</td>
              <td>{(cost.price * cost.quantity).toFixed(2)} zł</td>
              <td>{cost.status}</td>
              <td>
                <Button variant="outline-secondary" onClick={() => onToggleStatus(index)}>
                  {cost.status === 'Unpaid' ? 'Mark as Paid' : 'Mark as Unpaid'}
                </Button>
              </td>
              <td>
                <Button variant="outline-danger" onClick={() => onDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total Cost</td>
            <td>{totalCost.toFixed(2)} zł</td>
            <td colSpan="4"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default CostOverview;
