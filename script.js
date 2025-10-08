// Select all the elements that have the price
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

let total = 0;

// Loop through the prices and add them to the total
priceElements.forEach((priceElement) => {
  const value = parseFloat(priceElement.innerText);
  if (!isNaN(value)) {
    total += value;
  }
});

// Create a new table row for the grand total
const newRow = document.createElement("tr");

// Create a single cell that spans two columns
const totalCell = document.createElement("td");
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.colSpan = 2; // Make it span across both columns
totalCell.innerText = `Total: Rs ${total}`;

// Append the cell to the row
newRow.appendChild(totalCell);

// Append the row to the table
const table = document.querySelector("table");
table.appendChild(newRow);
