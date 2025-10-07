const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
  const priceCells = document.querySelectorAll('[data-ns-test="price"]');
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Prevent duplicates
  const existing = document.querySelector('[data-ns-test="grandTotal"]');
  if (existing) {
    existing.textContent = total;
    return;
  }

  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.setAttribute("data-ns-test", "grandTotal");
  totalCell.textContent = total;

  newRow.appendChild(totalCell);
  document.querySelector("#groceryTable").appendChild(newRow);
});
