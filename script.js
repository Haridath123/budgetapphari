const form = document.getElementById('entryForm');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const entriesList = document.getElementById('entriesList');
const balance = document.getElementById('balance');

let totalBalance = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const desc = description.value.trim();
  const amt = parseFloat(amount.value);
  const entryType = type.value;

  if (!desc || isNaN(amt) || amt <= 0) return;

  const entry = document.createElement('div');
  entry.className = `entry ${entryType}`;
  entry.innerHTML = `
    <span>${desc}</span>
    <span>${entryType === 'income' ? '+' : '-'} ₹${amt.toFixed(2)}</span>
  `;

  entriesList.prepend(entry);

  totalBalance += entryType === 'income' ? amt : -amt;
  balance.textContent = totalBalance.toFixed(2);

  form.reset();
});
