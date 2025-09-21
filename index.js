// Module 2 – Assignment 2

function greet() {
  // 1) Ask for name
  const name = prompt("What is your name?");

  // 2) Say hello
  alert(`Hello, ${name}`);

  // 3) Ask age, convert to number
  const ageStr = prompt("How old are you?");
  const age = parseInt(ageStr, 10);

  // 4) Ask if birthday already happened this year
  const hadBirthday = confirm("Has your birthday already happened this year? Click OK for Yes, Cancel for No.");

  // 5) Compute birth year
  const currentYear = new Date().getFullYear();
  const birthYear = hadBirthday ? currentYear - age : currentYear - age - 1;

  // 6) Tell the user the birth year
  alert(`You were born in ${birthYear}.`);
}
