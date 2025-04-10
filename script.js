Script.js

document.getElementById('generate-btn').addEventListener('click', () => {
  const name = document.getElementById('name').value || '[Name]';
  const amount = document.getElementById('amount').value || '0.00';
  const upiId = document.getElementById('upi-id').value || '[UPI ID]';
  const date = document.getElementById('date').value || '[Date]';
  const transactionId = document.getElementById('transaction-id').value || '[ID]';

  document.getElementById('preview-name').textContent = `Paid to ${name}`;
  document.getElementById('preview-amount').textContent = `₹${amount}`;
  document.getElementById('preview-upi-id').textContent = upiId;
  document.getElementById('preview-date').textContent = date;
  document.getElementById('preview-transaction-id').textContent = `Transaction ID: ${transactionId}`;
});

// To save the screenshot as an image, you can use a library like html2canvas.

——-

document.getElementById('generate-btn').addEventListener('click', () => {
  const name = document.getElementById('name').value || '[Name]';
  const amount = document.getElementById('amount').value || '0.00';
  const upiId = document.getElementById('upi-id').value || '[UPI ID]';
  const date = document.getElementById('date').value || '[Date]';
  const transactionId = document.getElementById('transaction-id').value || '[Transaction ID]';

  document.getElementById('preview-name').textContent = `Paid to ${name}`;
  document.getElementById('preview-amount').textContent = `₹${amount}`;
  document.getElementById('preview-upi-id').textContent = upiId;
  document.getElementById('preview-date').textContent = date;
  document.getElementById('preview-transaction-id').textContent = `Transaction ID: ${transactionId}`;
});

// Add the download functionality
document.getElementById('generate-btn').addEventListener('dblclick', () => {
  html2canvas(document.querySelector('#screenshot-preview')).then(canvas => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'payment-screenshot.png';
    link.click();
  });
});
