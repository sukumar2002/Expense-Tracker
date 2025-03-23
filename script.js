let balance = 0;
const expenseList = document.getElementById('expenseList');
const balanceElement = document.getElementById('balance');
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function updateUI() {
    expenseList.innerHTML = '';
    balance = 0;
    expenses.forEach((expense, index) => {
        balance -= expense.amount;
        const li = document.createElement('li');
        li.innerHTML = `${expense.description} - ₹${expense.amount} (${expense.category}) 
            <button onclick="removeExpense(${index})">X</button>`;
        expenseList.appendChild(li);
    });
    balanceElement.textContent = `₹${balance}`;
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    
    if (description && amount) {
        expenses.push({ description, amount, category });
        updateUI();
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
}

function removeExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}
updateUI();
