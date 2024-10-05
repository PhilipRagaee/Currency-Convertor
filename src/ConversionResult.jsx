import React from 'react';

export const ConversionResult = ({ convertedAmount, toCurrency }) => {
  return (
    <div className="mt-6 flex flex-col items-center">
      <h2 className="text-gray-700 text-lg">Converted Amount</h2>
      <div className="text-3xl font-bold text-blue-600 mt-2">
        {convertedAmount.toFixed(2)} {toCurrency}
      </div>
    </div>
  );
};
