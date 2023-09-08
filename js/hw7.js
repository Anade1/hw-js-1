// Завдання 1

if ("0") {
    console.log("Привіт");
}

// Буде привів тому що "0" це не порожній рядок




// Завдання 2

let name = prompt("Яка “офіційна” назва JavaScript?")

if (name === "ECMAScript"){
    alert("Правильно!!")
} else {
    alert("Ви не знаєте? ECMAScript!")
}




// Завдання 3

const x1 = 10;
const x2 = 30;
const number = 45;

if (number < x1) {
    console.log(`${number} < ${x1}`);
} else if (number > x2) {
    console.log(`${number} > ${x2}`);
} else if (number >= x1 && number <= x2) {
    console.log(`${number} знаходиться в межах від ${x1} до ${x2}`);
} else if (number === x1) {
    console.log(`${number} = ${x1}`);
} else if (number === x2) {
    console.log(`${number} = ${x2}`);
}



// Завдання 4

const isOnline = false; 
const isFriend = true; 
const isDnd = false;

if (isOnline === true && isFriend === true && isDnd === true) {
    alert("Your friend ready to talk!!!")
} else {
    alert("You can't text him now")
}


// Завдання 5

const subscribe = "free";

if (subscribe === "free") {
    alert("Для доступу до цього контенту потрібна підписка 'pro' або 'vip'."); 
} else {
    alert("Ви маєте доступ до супер мега контенту.");
}




// Завдання 6 

const input = prompt("Введіть число:");

if (!isNaN(input)) {
    const number = parseFloat(input);

    if (number >= 55 && number <= 99) {
        alert("Число потрапляє в діапазон.");
    } else {
        alert("Число не потрапляє в діапазон.");
    }
} else {
    alert("Введене значення не є числом.");
}



// Завдання 7

const age = 21; 

if (age >= 0 && age <= 16) {
    alert("Максим відноситься до 'діти'.");

} else if (age >= 17 && age <= 60) {
    alert("Максим відноситься до 'дорослі'.");

} else if (age >= 61 && age <= 100) {
    alert("Максим відноситься до 'пенсіонери'.");

} else {
    alert("Він камень");
}



// Завдання 8


const firstName = "Віктор";
const secondName = "Сташко";

if (firstName.length > 4 && secondName.length > 5) {
    const total = firstName.length + secondName.length;
    alert(`Сума букв: ${total}`);
} else {
    alert("ОЙ, неможливо виконати ");
}




// Завдання 9

let a = 1; 
let b = 1; 

let result = (a + b < 4) ? 'меньше' : 'більше';

console.log(result);


