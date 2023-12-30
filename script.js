let balance = 0;
const transactionsList = document.getElementById("transactions");
const balanceElement = document.getElementById("balance");

function addTransaction() {
    const type = document.getElementById("type").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const transaction = {
        type: type,
        amount: amount
    };

    updateBalance(transaction);
    addTransactionToList(transaction);
}

function updateBalance(transaction) {
    if (transaction.type === "income") {
        balance += transaction.amount;
    } else {
        balance -= transaction.amount;
    }

    balanceElement.textContent = balance.toFixed(2);
    balanceElement.className = balance >= 0 ? "income" : "expense";
}
function addTransactionToList(transaction) {
    const listItem = document.createElement("li");
    listItem.textContent = ${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}: $${transaction.amount.toFixed(2)};
    listItem.className = transaction.type;
    transactionsList.appendChild(listItem);
}
