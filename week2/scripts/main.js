/*
pull existing state of textbox from local storage
update checkbox
if checkbox is checked show the input from Date list 
else hide it

pull existing expences from localstorace
render expences

when enter button is clicked:
    get form contents
    update LS with the form contents
    reset the form
    re-render expense list
*/

import { saveExpense } from "./expenseTracker.mjs";

let checkState = localStorage.getItem('checkState');
const inputCheckBox = document.querySelector('#allowInput');
inputCheckBox.checked = (checkState === 'true') ? true : false;
console.log(checkState);
function toggleInput() {
    if(inputCheckBox.checked) {
        document.querySelector('#input').classList.remove('hide');
    } else {
        document.querySelector('#input').classList.add('hide')
    }
    localStorage.setItem('checkState', inputCheckBox.checked ? 'true' : 'false')
}
toggleInput();

function saveHandler(e) {
    const description = document.querySelector('#description')
    const amount = document.querySelector('#amount')
    const newExpense = {
        description: description.value,
        amount: amount.value
    }
    saveExpense(newExpense);
    description.value = "";
    amount.value = "";
}
inputCheckBox.addEventListener('change', toggleInput);
document.querySelector('#submit').addEventListener('click', saveHandler)