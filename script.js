// Create button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

// Add event listener
getSumBtn.addEventListener("click", () => {
  const priceCells = document.querySelectorAll('[data-ns-test="prices"]');
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Avoid duplicate total rows
  const existing = document.querySelector('[data-ns-test="grandTotal"]');
  if (existing) {
    existing.textContent = total;
    return;
  }

  // Create new row
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.setAttribute("data-ns-test", "grandTotal");
  totalCell.textContent = total;

  newRow.appendChild(totalCell);
  document.getElementById("groceryTable").appendChild(newRow);
});
