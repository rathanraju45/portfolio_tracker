import React, { useState, useEffect } from 'react';
import StockTable from './components/StockTable'; 
import StockForm from './components/StockForm'; 
import Dashboard from './components/Dashboard';

const App = () => {
    const [stocks, setStocks] = useState([]); // State to store stock data

    // Fetch stock data when the component loads
    useEffect(() => {
        fetchStocks();
    }, []);

    // Function to fetch stock data (Replace '/api/stocks' with your API endpoint)
    const fetchStocks = async () => {
        try {
            // Simulated fetch data (replace this with actual API call)
            const response = await fetch('/api/stocks'); // Replace with real backend endpoint
            const data = await response.json();
            setStocks(data);
        } catch (error) {
            console.error('Error fetching stocks:', error);
        }
    };

    // Add a new stock
    const addStock = (newStock) => {
        setStocks([...stocks, newStock]);
    };

    // Update an existing stock
    const updateStock = (updatedStock) => {
        const updatedStocks = stocks.map((stock) =>
            stock.id === updatedStock.id ? updatedStock : stock
        );
        setStocks(updatedStocks);
    };

    // Delete a stock
    const deleteStock = (id) => {
        const updatedStocks = stocks.filter((stock) => stock.id !== id);
        setStocks(updatedStocks);
    };

    return (
        <div className="App">
            <h1>Portfolio Tracker</h1>

            {/* Dashboard */}
            <Dashboard stocks={stocks} />

            {/* Form to Add/Edit Stock */}
            <StockForm addStock={addStock} updateStock={updateStock} />

            {/* Table to Display Stock List */}
            <StockTable stocks={stocks} deleteStock={deleteStock} />
        </div>
    );
};

export default App;
