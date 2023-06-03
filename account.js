// Function to handle form submission
function submitPaymentForm(event) {
  event.preventDefault(); // Prevent form from submitting normally
  
  // Get form inputs
  const bankname = document.getElementById('bank-name').value;
  const acctnumber= document.getElementById('acct-number').value;
  const acctname = document.getElementById('acct-name').value;
  const amount = document.getElementById('amount').value;
   const pin = document.getElementById('pin').value;
  
  
  // Create payment object
  const payment = {
   bankname: bankname,
    acctnumber: acctnumber,
     acctname: acctname,
     pin: pin,
    amount: parseFloat(amount)
  };
  
  // Send payment data to server
  fetch('/api/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payment)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error sending payment.');
    }
  })
  .then(data => {
    // Handle successful payment response
    console.log('Payment sent:', data);
    // TODO: Show success message to user
  })
  .catch(error => {
    // Handle error
    console.error('Payment error:', error);
    // TODO: Show error message to user
  });
}

// Add event listener to the form
const paymentform = document.getElementById('payment-form');
paymentform.addEventListener('click', submitPaymentform);