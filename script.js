"use strict";

const btn5 = document.querySelector(".btn5");
const btn10 = document.querySelector(".btn10");
const btn15 = document.querySelector(".btn15");
const btn25 = document.querySelector(".btn25");
const btn50 = document.querySelector(".btn50");
const reset = document.querySelector(".reset");
const tipAmount = document.querySelector(".amount-value");
const total = document.querySelector(".total-value");

let resetBill = " ";
let resetPeople = " ";
let resetTotal = "$0.00";
let resetAmount = "$0.00";

btn5.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * (5 / 100);

  const tipPerPerson = money / numberOfPeople;

  tipAmount.textContent = `$${tipPerPerson}`;
  const caltotal = bill / numberOfPeople;
  total.textContent = `$${tipPerPerson + caltotal}`;
});

btn10.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * (10 / 100);

  const tipPerPerson = money / numberOfPeople;

  tipAmount.textContent = `$${tipPerPerson}`;
  const caltotal = bill / numberOfPeople;
  total.textContent = `$${tipPerPerson + caltotal}`;
});

btn15.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * (15 / 100);

  const tipPerPerson = money / numberOfPeople;

  tipAmount.textContent = `$${tipPerPerson}`;
  const caltotal = bill / numberOfPeople;
  total.textContent = `$${tipPerPerson + caltotal}`;
});

btn25.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * (25 / 100);

  const tipPerPerson = money / numberOfPeople;

  tipAmount.textContent = `$${tipPerPerson}`;
  const caltotal = bill / numberOfPeople;
  total.textContent = `$${tipPerPerson + caltotal}`;
});

btn50.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  const money = bill * (50 / 100);
  const tipPerPerson = money / numberOfPeople;

  tipAmount.textContent = `$${tipPerPerson}`;
  const caltotal = bill / numberOfPeople;
  total.textContent = `$${tipPerPerson + caltotal}`;
});

reset.addEventListener("click", function () {
  const bill = Number((document.querySelector(".bill").value = resetBill));

  const numberOfPeople = Number(
    (document.querySelector(".number-people").value = resetPeople)
  );

  tipAmount.textContent = resetAmount;
  total.textContent = resetTotal;
});
