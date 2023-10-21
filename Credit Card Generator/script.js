let cardHolderName = document.querySelector("#cardholder-name");
let cardNumber = document.querySelector("#card-number");
let expiryDateMonth = document.querySelector("#expiry-date-month");
let expiryDateYear = document.querySelector("#expiry-date-year");
let CVCNumber = document.querySelector("#cvc");

let greetingMessage = document.querySelector("h3");

let confirmButton = document.querySelector(".confirm-btn");

let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let n4 = document.querySelector("#n4");

let name = document.querySelector(".month");
let monthYear = document.querySelector(".year");
let cvc = document.querySelector(".cvc");


confirmButton.addEventListener("click",(e) => {
    e.preventDefault();

    greetingMessage.classList.toggle("hidden");
    greetingMessage.classList.toggle("show-header");

    name.value = cardHolderName.value;

    monthYear.value = expiryDateMonth.value + "/" + expiryDateYear.value;

    cvc.value = CVCNumber.value;

    let number = cardNumber.value;
    n1.value = number.slice(0,4);
    n2.value = number.slice(4,8);
    n3.value = number.slice(8,12);
    n4.value = number.slice(12,16);
    
    cardHolderName.value = "";
    expiryDateMonth.value = "";
    expiryDateYear.value = "";
    cardNumber.value = "";
    CVCNumber.value = "";

});




