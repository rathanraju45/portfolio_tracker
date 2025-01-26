import React from 'react';

const StockTable = ({ stocks = [] }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Ticker</th>
                        <th>Quantity</th>
                        <th>Buy Price</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks?.map((stock, index) => (
                        <tr key={index}>
                            <td>{stock.name}</td>
                            <td>{stock.ticker}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.buyPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;
