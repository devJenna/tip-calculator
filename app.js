const billInput = document.querySelector(".bill-amount");
const tipInput = document.querySelectorAll(".tip-option-button");
const customTip = document.querySelector(".tip-option-input");
const numOfPeople = document.querySelector(".number-of-people");
const tipAmountDisplay = document.querySelector(".tip-amount");
const totalAmountDisplay = document.querySelector(".total-amount");
const tipPerPersonDisplay = document.querySelector(".tip-amount-per-person");
const totalPerPersonDisplay = document.querySelector(".total-amount-per-person");

let tipPercent = 0;
let numPeople = 1;
numOfPeople.defaultValue = 1;

billInput.addEventListener("input", getBillValue);
function getBillValue() {
    // bill = billInput.value;
    bill = parseFloat(billInput.value);
    console.log(bill);
    // tipPercent = 0;
    // reset bill and tip amount when bill input is updated
    if (billInput.value == "") {
        bill = 0;
        tipAmount = 0;
    }
    calculateTip();
};
// to prevent reloading when enter key is pressed
billInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        // alert("enter key is pressed!");
        e.preventDefault();
    }
})

// another way to prevent reloading when enter key is pressed
// document.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault();
// })

tipInput.forEach(function (button) {
    button.addEventListener("click", getTipPercent);
});
function getTipPercent(event) {
    tipInput.forEach(function (button) {
        button.classList.remove("selected-tip");
        if (event.target.innerHTML === button.innerHTML) {
            button.classList.add("selected-tip");
            tipPercent = parseFloat(button.innerHTML) / 100;
            // remove previously entered custom tip value and style when tip button is clicked
            customTip.classList.remove("custom-tip");
            customTip.value = "";
        };
    });
    calculateTip();
};


customTip.addEventListener("input", getCustomTip);
// remove selected tip button when custom tip is entered
customTip.addEventListener("input", getTipPercent);
function getCustomTip() {
    // add classList to style when custom tip is entered
    customTip.classList.add("custom-tip");
    tipPercent = parseFloat(customTip.value) / 100;
    console.log(tipPercent);
    // remove classList when custom tip is blank
    if (customTip.value == "") {
        customTip.classList.remove("custom-tip");
    };
    calculateTip();
};

numOfPeople.addEventListener("input", getNumPeople);
function getNumPeople() {
    // numPeople = numOfPeople.value;
    numPeople = parseFloat(numOfPeople.value);
    console.log(numPeople);
    calculateTip();
};

function calculateTip() {
    tipAmount = parseFloat(bill * tipPercent);
    // console.log(tipAmount); 
    tipAmountDisplay.textContent = `\$${tipAmount.toFixed(2)}`;

    totalAmount = parseFloat(bill + tipAmount);
    // console.log(totalAmount);
    totalAmountDisplay.textContent = `\$${totalAmount.toFixed(2)}`;

    tipPerPerson = parseFloat(tipAmount / numPeople);
    // console.log(tipPerPerson);
    tipPerPersonDisplay.textContent = `\$${tipPerPerson.toFixed(2)}`;

    totalPerPerson = parseFloat(totalAmount / numPeople);
    // console.log(totalPerPerson);
    totalPerPersonDisplay.textContent = `\$${totalPerPerson.toFixed(2)}`;
};

