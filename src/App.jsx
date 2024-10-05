import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { ConversionResult } from './components/ConversionResult';

const API_KEY = 'YOUR_API_KEY';

function App() {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('SGD');
  const [conversionRate, setConversionRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`);
        setConversionRate(response.data.conversion_rate);
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
      }
    };
    
    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setConvertedAmount(amount * conversionRate);
  }, [amount, conversionRate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Currency Converter</h1>
      <p className="text-sm text-gray-500 mb-8">Check live rates, set rate alerts, and more</p>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <SearchBar
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setAmount={setAmount}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />
        <ConversionResult convertedAmount={convertedAmount} toCurrency={toCurrency} />
      </div>
    </div>
  );
}

export default App;
