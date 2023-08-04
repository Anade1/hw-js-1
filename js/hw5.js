// Завдання 1

let result = 5 + 5 + '5';

console.log(result);

console.log(typeof result);


// Завдання 2

const email = "example@example.com";

if (email.includes("@")) {
  console.log("електронна адреса містить символ @.");
}

const total = email.length;
console.log("Загальна кількість символів:", total);


// Завдання 3

let word1 = "My";
let word2 = "name";
let word3 = "is";

let fullName = word1 + " " + word2 + " " + word3;
fullName += "  Viktor";

console.log(fullName);


// Завдання 4

let userName = "Андрію";
let payment = 300;
let message = `Дякуємо, ${userName}! До сплати ${payment} гривень.`;

alert(message);
