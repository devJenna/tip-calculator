const billInput = document.querySelector(".bill-amount");
const tipInput = document.querySelectorAll(".tip-option-button");
const tipAmountDisplay = document.querySelector(".tip-amount");
const totalAmountDisplay = document.querySelector(".total-amount");
const numOfPeople = document.querySelector(".number-of-people");
const tipPerPersonDisplay = document.querySelector(".tip-amount-per-person");
const totalPerPersonDisplay = document.querySelector(".total-amount-per-person");

// billInput.defaultValue = 0.00;
numOfPeople.defaultValue = 1;

// bill input 
billInput.addEventListener("input", tipCalculate);
function tipCalculate(button) {
    let bill = parseFloat(billInput.value);
    console.log(bill);
    for (let i = 0; i < tipInput.length; i++) {
        tipInput[i].addEventListener("click", tipCalculate);
    }

    let tipPercent = parseFloat(button.target.textContent) / 100;
    let tipAmount = parseFloat((bill * tipPercent)).toFixed(2);
    tipAmountDisplay.textContent = `\$${tipAmount}`;
    console.log(tipPercent);
    console.log(tipAmount);

    // two decimal places for all the amount
    let totalAmount = (parseFloat(bill) + parseFloat(tipAmount)).toFixed(2);
    // let totalAmount = (bill + tipAmount).toFixed(2);
    totalAmountDisplay.textContent = `\$${totalAmount}`;

    numOfPeople.addEventListener("input", perPerson);
    function perPerson() {
        let numPeople = numOfPeople.value;
        console.log(numOfPeople);
        console.log(numPeople);
        let tipPerPerson = (tipAmount / numPeople).toFixed(2);
        tipPerPersonDisplay.textContent = `\$${tipPerPerson}`;

        let totalPerPerson = (totalAmount / numPeople).toFixed(2);
        totalPerPersonDisplay.textContent = `\$${totalPerPerson}`;
    };

    // allow amount per person change according to the change of tip option
    perPerson();
};


