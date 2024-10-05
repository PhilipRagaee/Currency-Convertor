document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const convertedAmountInput = document.getElementById('converted-amount');

    const API_KEY = '49e366de419626d2d172861d'; // Make sure this is correct
    const API_URL = 'https://v6.exchangerate-api.com/v6/' + API_KEY + '/pair/';

    // Fetch exchange rate from the API
    async function fetchExchangeRate(from, to) {
        try {
            const response = await fetch(`${API_URL}${from}/${to}`);
            if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            
            if (data.result === 'success' && data.conversion_rate) {
                return data.conversion_rate;
            } else {
                throw new Error('Invalid exchange rate data received');
            }
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            alert('Error fetching exchange rate: ' + error.message);
            return null;  // Return null in case of error
        }
    }

    // Update the converted amount in the UI
    async function updateConvertedAmount() {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        const rate = await fetchExchangeRate(from, to);
        if (rate) {
            const convertedAmount = amount * rate;
            convertedAmountInput.value = convertedAmount.toFixed(2);
        } else {
            convertedAmountInput.value = 'Error';
        }
    }

    // Event listeners for updating conversion
    amountInput.addEventListener('input', updateConvertedAmount);
    fromCurrency.addEventListener('change', updateConvertedAmount);
    toCurrency.addEventListener('change', updateConvertedAmount);

    // Initial update
    updateConvertedAmount();
});
