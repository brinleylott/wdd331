function renderExpenses(expenses) {
    const html = expenses.map(expenseTemplate);
    document.querySelector('outputBody').innerHTML = html.json;
}
function expenseTemplate(expence) {
    return ` <tr>
    <td>${expense.description}$</td>
    <td>${expense.amount}$</td>
  </tr>`
}

export function saveExpense(expense) {
    console.log('save');
    const expences = JSON.parse(localStorage.getItem('expenses')) || [];
    expences.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expences));
    renderExpenses(expences);
}

