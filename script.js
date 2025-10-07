const priceCells = document.querySelectorAll('[data-ns-test="price"]');
let total = 0;

priceCells.forEach(cell => {
  const value = parseFloat(cell.textContent);
  if (!isNaN(value)) {
    total += value;
  }
});

// Check if total row already exists (avoid duplicate)
let existing = document.querySelector('[data-ns-test="grandTotal"]');
if (existing) {
  existing.textContent = total;
} else {
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');

  totalCell.setAttribute('colspan', '2');
  totalCell.setAttribute('data-ns-test', 'grandTotal');
  totalCell.textContent = total;

  newRow.appendChild(totalCell);
  document.querySelector('table').appendChild(newRow);
}
