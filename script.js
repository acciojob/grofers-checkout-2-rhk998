const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
  const prices = document.querySelectorAll('[data-ns-test="price"]');
  let total = 0;

  prices.forEach(cell => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Prevent duplicate total rows
  const existing = document.querySelector('[data-ns-test="grandTotal"]');
  if (existing) {
    existing.textContent = total;
    return;
  }

  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.setAttribute("data-ns-test", "grandTotal");
  cell.textContent = total;

  row.appendChild(cell);
  document.querySelector("table").appendChild(row);
});
