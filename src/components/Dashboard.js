import React from 'react';

const Dashboard = ({ stocks }) => {
    // Calculate portfolio metrics
    const portfolioMetrics = stocks.length > 0 ? {
        totalValue: stocks.reduce((total, stock) => total + stock.quantity * stock.buyPrice, 0),
        topPerformingStock: stocks.reduce((topStock, stock) =>
            !topStock || stock.quantity * stock.buyPrice > topStock.quantity * topStock.buyPrice ? stock : topStock, null),
        portfolioDistribution: stocks.map((stock) => ({
            name: stock.name,
            value: stock.quantity * stock.buyPrice
        }))
    } : { totalValue: 0, topPerformingStock: null, portfolioDistribution: [] };

    const { totalValue, topPerformingStock, portfolioDistribution } = portfolioMetrics;

    return (
        <div className="dashboard">
            <h2>Portfolio Dashboard</h2>
            <p><strong>Total Portfolio Value:</strong> ${totalValue.toFixed(2)}</p>

            {topPerformingStock ? (
                <p>
                    <strong>Top Performing Stock:</strong> {topPerformingStock.name} (${(topPerformingStock.quantity * topPerformingStock.buyPrice).toFixed(2)})
                </p>
            ) : (
                <p>No stocks in the portfolio.</p>
            )}

            <div>
                <h3>Portfolio Distribution:</h3>
                {portfolioDistribution.length > 0 ? (
                    <ul>
                        {portfolioDistribution.map((stock) => (
                            <li key={stock.name}>
                                {stock.name}: ${stock.value.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No stocks to display.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
