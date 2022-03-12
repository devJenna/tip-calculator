const billInput = document.querySelector(".bill-amount");
const tipInput = document.querySelectorAll(".tip-option-button");
const customTip = document.querySelector(".tip-option-input");
const numOfPeople = document.querySelector(".number-of-people");
const tipAmountDisplay = document.querySelector(".tip-amount");
const totalAmountDisplay = document.querySelector(".total-amount");
const tipPerPersonDisplay = document.querySelector(".tip-amount-per-person");
const totalPerPersonDisplay = document.querySelector(".total-amount-per-person");

let tipPercent;
let numPeople = 1;
numOfPeople.defaultValue = 1;

billInput.addEventListener("input", getBillValue);
function getBillValue() {
    // bill = billInput.value;
    bill = parseFloat(billInput.value);
    console.log(bill);
    calculateTip()
}

tipInput.forEach(function (button) {
    button.addEventListener("click", getTipPercent);
})
function getTipPercent(event) {
    tipInput.forEach(function (button) {
        button.classList.remove("selected-tip");
        if (event.target.innerHTML === button.innerHTML) {
            button.classList.add("selected-tip");
            tipPercent = parseFloat(button.innerHTML) / 100;
        }
    })
    calculateTip();
}


customTip.addEventListener("input", getCustomTip);
function getCustomTip() {
    tipPercent = parseFloat(customTip.value) / 100;
    console.log(tipPercent);
    calculateTip()
}

numOfPeople.addEventListener("input", getNumPeople);
function getNumPeople() {
    // numPeople = numOfPeople.value;
    numPeople = parseFloat(numOfPeople.value);
    console.log(numPeople);
    calculateTip()
}

function calculateTip() {
    tipAmount = parseFloat((bill * tipPercent).toFixed(2));
    // console.log(tipAmount); 
    tipAmountDisplay.textContent = `\$${tipAmount}`;

    totalAmount = parseFloat((bill + tipAmount).toFixed(2));
    // console.log(totalAmount);
    totalAmountDisplay.textContent = `\$${totalAmount}`;

    tipPerPerson = parseFloat((tipAmount / numPeople).toFixed(2));
    // console.log(tipPerPerson);
    tipPerPersonDisplay.textContent = `\$${tipPerPerson}`;

    totalPerPerson = parseFloat((totalAmount / numPeople).toFixed(2));
    // console.log(totalPerPerson);
    totalPerPersonDisplay.textContent = `\$${totalPerPerson}`;
}

