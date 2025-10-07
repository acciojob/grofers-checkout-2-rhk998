const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll('[data-ns-test="price"]');
    let total = 0;

    priceElements.forEach(el => {
        const value = parseFloat(el.textContent.trim());
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Remove any existing total row (by removing parent row of grandTotal)
    const existingAns = document.querySelector('[data-ns-test="grandTotal"]');
    if (existingAns) {
        existingAns.parentElement.remove();
    }

    // Create a new row and cell for the total
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.colSpan = 2;
    newCell.setAttribute("data-ns-test", "grandTotal");
    newCell.textContent = total;

    newRow.appendChild(newCell);
    document.querySelector('table').appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
