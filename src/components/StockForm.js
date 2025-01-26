import React, { useState } from 'react';

function StockForm({ addStock }) {
  const [stock, setStock] = useState({ name: '', ticker: '', buyPrice: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStock(stock);
    setStock({ name: '', ticker: '', buyPrice: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={stock.name} onChange={handleChange} placeholder="Stock Name" required />
      <input name="ticker" value={stock.ticker} onChange={handleChange} placeholder="Ticker" required />
      <input name="buyPrice" value={stock.buyPrice} onChange={handleChange} placeholder="Buy Price" required />
      <button type="submit">Add Stock</button>
    </form>
  );
}

export default StockForm;