// Завдання 1

const letter = ["5px", "12djd334", "12.45asdwe12", "qwqweeewq"];

let k1, k2, k3, k4;

k1 = parseInt(letter[0]);
k2 = parseInt(letter[1]);
k3 = parseInt(letter[2]);
k4 = parseInt(letter[3]);

console.log(k1);
console.log(k2);
console.log(k3);
console.log(k4);


// Завдання 2

const number = ["5px", "12djd334", "12.45asdwe12", "qwqweeew"];

let c1, c2, c3, c4;

c1 = parseFloat(number[0]);
c2 = parseFloat(number[1]);
c3 = parseFloat(number[2]);
c4 = parseFloat(number[3]);

console.log(c1); 
console.log(c2); 
console.log(c3); 
console.log(c4);


// Завдання 3

const numbers = [2, 34, 99, 3, 22, 36, 733, 18];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);

console.log("Найбільше значення-", maxNumber); 
console.log("Найменше значення-", minNumber);


// Завдання 4

const randomFraction = Math.random();
const random = Math.floor(randomFraction * 17) + 3;

console.log(random);


// Завдання 5

const oneNumber = 41;
const squareRoot = Math.sqrt(oneNumber);

console.log("Квадратний корінь числа", oneNumber, "дорівнює", squareRoot);


// Завдання 5

const integerValue = 42;
const stringNumber = "123";
const parsedInteger = parseInt(stringNumber);

console.log(parsedInteger);

const convertedToString = integerValue.toString();

console.log(convertedToString);




