const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    priceElements.forEach(el => {
        const value = parseFloat(el.textContent);
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Remove any existing total row
    const existingAns = document.getElementById('ans');
    if (existingAns) {
        existingAns.parentElement.remove();
    }

    // Create a new row and a cell
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.id = "ans"; // Important for test to pass
    newCell.colSpan = 2;
    newCell.textContent = `Total Price: ${total}`;

    newRow.appendChild(newCell);
    document.querySelector('table').appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
