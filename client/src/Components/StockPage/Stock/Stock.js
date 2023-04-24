import React from "react";
import "./Stock.css";

const Stock = ({ stock }) => {
  return (
    <div className="stock-card">
      <div className="stock-info">
        <h2>{stock.name}</h2>
        <p className="symbol">Symbol: {stock.symbol}</p>
      </div>
      <p className="price">Price: {stock.price}</p>
    </div>
  );
};

export default Stock;