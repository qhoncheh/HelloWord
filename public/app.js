const me = {
    name: "ghonche",
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I Spent", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice('ghonche', 'web Designer', 2000);
const invTwo = new Invoice('mario', 'UI/UX Designer', 1000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
