const tipboxes = document.querySelectorAll(".box");
const custombox = document.querySelector(".custom-input");
const bill = document.querySelector(".bill-input");
const numberofpeople = document.querySelector(".people-input");
const tipamount = document.querySelector(".amount--tip");
const totalamount = document.querySelector(".amount--total");
const resetbutton = document.querySelector(".button");
const bill_panel = document.querySelector(".panel--bill");
const people_panel = document.querySelector(".panel--people")
const notzero_people = document.querySelector(".notzero-people");
const notzero_bill = document.querySelector(".notzero-bill");
const box15 = document.querySelector(".box15");

let tip;
let billtip;
let tipPerPerson;
let billPerPerson;
let totalPerPerson;

const startingValues = () => {
    window.addEventListener("DOMContentLoaded", (e) => {
        bill.value = 100;
        numberofpeople.value = 1;
        totalamount.innerHTML = "$0";
        tipamount.innerHTML = "$0";
    })
}
const clickingCustom = () => {
    custombox.onclick = () => {
        tipboxes.forEach(box => {
            box.classList.remove("active");
        }) 
    } 
}

const calculateTipPerPerson = () => {
    if(document.activeElement == custombox) {
        tip = custombox.value/100;
    } else { 
        tipboxes.forEach(box => {
            if(box.classList.contains("active")) {
                if(box.innerHTML == "5%") {
                    tip = 0.05;
                } else if(box.innerHTML == "10%") {
                    tip = 0.10;
                } else if(box.innerHTML == "15%") {
                    tip = 0.15;
                } else if(box.innerHTML == "25%") {
                    tip = 0.25;
                } else if(box.innerHTML == "50%") {
                    tip = 0.50;
                }
            }
           
        })  
    }  
    billtip = bill.value * tip;
    tipPerPerson = (billtip / numberofpeople.value);
    tipamount.innerHTML = `$${tipPerPerson.toFixed(2).toString()}`

    billPerPerson = bill.value / numberofpeople.value;
    totalPerPerson = (billPerPerson + tipPerPerson);
    totalamount.innerHTML = `$${totalPerPerson.toFixed(2).toString()}`;  
} 

const isBillZero = () => {
    if(bill.value < 1) {
        bill_panel.classList.add("zeropeople");
        notzero_bill.classList.remove("hidden");
    } else {
        bill_panel.classList.remove("zeropeople");
        notzero_bill.classList.add("hidden");
    }
}

const isPeopleZero = () => {
    if(numberofpeople.value < 1) {
        people_panel.classList.add("zeropeople");
        notzero_people.classList.remove("hidden");
    } else {
        people_panel.classList.remove("zeropeople");
        notzero_people.classList.add("hidden");
    }
}

const checkingIfZero = () => {
    isPeopleZero();
    isBillZero();
}

const clickingTipboxes = () => {
    tipboxes.forEach(box => {
        box.addEventListener("click", (e) => {
            tipboxes.forEach(tipbox => {
                tipbox.classList.remove("active");
            });
            e.target.classList.add("active");
        })
    })
}

const clickingResetButton = () => {
    resetbutton.onclick = () => {
        bill.value = 100;
        numberofpeople.value = 1;
        totalamount.innerHTML = "$0";
        tipamount.innerHTML = "$0";
        custombox.value = "Custom";
        tipboxes.forEach(box => {
            box.classList.remove("active");
        })
        box15.classList.add("active");
    }
}

setInterval(calculateTipPerPerson, 0);
clickingCustom();
clickingTipboxes();
setInterval(checkingIfZero, 0);
clickingResetButton();
startingValues();



