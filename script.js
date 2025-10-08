// Select all the price cells
const priceElements = document.querySelectorAll('[data-ns-test="price"]');

let total = 0;

// Loop through each price cell and sum the values
priceElements.forEach((cell) => {
  const value = parseFloat(cell.innerText);
  if (!isNaN(value)) {
    total += value;
  }
});

// Create a new row to display the grand total
const newRow = document.createElement("tr");

// Create the total cell
const totalCell = document.createElement("td");
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.colSpan = 2; // Make it span two columns
totalCell.innerText = total;

// Append the total cell to the row
newRow.appendChild(totalCell);

// Append the row to the table
document.querySelector("table").appendChild(newRow);
