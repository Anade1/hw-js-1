// Завдання 1

// const company = ['Pepsi', 'Fanta', 'Sprite'];
// company[1] = '10';
// console.log(company)


// Завдання 2

// const number = [
//     ['1', '2', '3'],

//     ['4', '5', '6'],

//     ['7', '8', '9']
// ];

// number.push('Google', 'Youtube', 'Discord');
// console.log(number);


// Завдання 3

// let total = [10, 20, 50, 40, 200];
// let sum = 0;     
// // Зробив через цикл for.
// for (let i = 0; i < total.length; i++) {
//     sum += total[i];
// }
// console.log(sum);





// Завдання 4

// let numbers = [1, 2, 3, 4, 5];


// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }






// Завдання 5


// let words = ["Apple", "Samsung", "Xiaomi", "Htc", "Nokia"];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 5) {
//     console.log(words[i]);
//   }
// }




// Завдання 6

let number = [50, 2, 0, 4, 20, 6, 7, 911, 9, 81];
let anotherNumber = number[0];

for (let i = 1; i < number.length; i++) {
  if (number[i] > anotherNumber) {
    anotherNumber = number[i]; 
  }
}
console.log(anotherNumber);



// Завдання 7

let aLotOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //<---💀

for (let i = 0; i < aLotOfNumbers.length; i++) {
  if (aLotOfNumbers[i] % 2 === 0) {
    console.log(aLotOfNumbers[i]);
  }
}

