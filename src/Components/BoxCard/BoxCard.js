import React from 'react';
import "./BoxCard.css";

const BoxCard = () => {
  return (
    <section className="wrapper">
      <div className="top-section">
        <h2>place for children props</h2>
      </div>
      <div className="bottom-section">
        <button>Approve</button>
        <button>Reject</button>
      </div>
    </section>
  );
};

export default BoxCard;
