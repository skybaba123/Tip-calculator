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
let resetTotal = 0.0;
let resetAmount = 0.0;

btn5.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * numberOfPeople * 0.05;

  const calTotal = (money = money + money);
  tipAmount.textContent = money;
  total.textContent = calTotal;
  console.log(money);
});

btn10.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * numberOfPeople * 0.1;
  const calTotal = (money = money + money);
  tipAmount.textContent = money;
  total.textContent = calTotal;
});

btn15.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * numberOfPeople * 0.15;
  const calTotal = (money = money + money);
  tipAmount.textContent = money;
  total.textContent = calTotal;
});

btn25.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * numberOfPeople * 0.25;
  const calTotal = (money = money + money);
  tipAmount.textContent = money;
  total.textContent = calTotal;
});

btn50.addEventListener("click", function () {
  const bill = Math.trunc(Number(document.querySelector(".bill").value));

  const numberOfPeople = Number(document.querySelector(".number-people").value);

  let money = bill * numberOfPeople * 0.5;
  const calTotal = (money = money + money);
  tipAmount.textContent = money;
  total.textContent = calTotal;
});

reset.addEventListener("click", function () {
  const bill = Number((document.querySelector(".bill").value = resetBill));

  const numberOfPeople = Number(
    (document.querySelector(".number-people").value = resetPeople)
  );

  tipAmount.textContent = resetAmount;
  total.textContent = resetTotal;
});
