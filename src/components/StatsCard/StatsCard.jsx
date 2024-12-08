import React from 'react';
import './statsCard.css';

const StatsCard = ({ title, count, icon }) => {
  return (
    <div className="stats-card" >
      <div className="card-content">
        <div>
          <h5>{title}</h5>
          <p>{count}</p>
        </div>
        <div className="card-icon">{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;
