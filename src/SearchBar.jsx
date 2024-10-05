import React from 'react';

export const SearchBar = ({ amount, fromCurrency, toCurrency, setAmount, setFromCurrency, setToCurrency }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4 items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-2 rounded-md p-2 w-32 text-lg"
          placeholder="Amount"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border-2 rounded-md p-2 w-32 text-lg"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="SGD">SGD</option>
          {/* Add more currency options here */}
        </select>
      </div>

      <div className="flex space-x-4 items-center">
        <span className="text-2xl">⇅</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border-2 rounded-md p-2 w-32 text-lg"
        >
          <option value="SGD">SGD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currency options here */}
        </select>
      </div>
    </div>
  );
};
