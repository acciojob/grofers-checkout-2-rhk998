const priceElements = document.querySelectorAll('[data-ns-test="price"]');

let total = 0;
priceElements.forEach(el => {
  const value = parseFloat(el.textContent);
  if (!isNaN(value)) {
    total += value;
  }
});

// Create new row
const newRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Span both columns, since it's a single cell in a row
totalCell.setAttribute('colspan', '2');
totalCell.setAttribute('data-ns-test', 'grandTotal');
totalCell.textContent = total;

// Add the cell to row and row to the table
newRow.appendChild(totalCell);
document.querySelector('table').appendChild(newRow);
