// Завдання 1

// const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];

// let script = '';

// for (let i = 0; i < cars.length; i++) {
//     if (i === cars.length) {
//         script += cars[i];
//     } else {
//         script += cars[i] + ', ';
//     }
// }

// console.log(script);



// const carsJoin = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
// const scriptJoin = carsJoin.join(', ');

// console.log(scriptJoin);







// // Завдання 2, 3, 4, 5


// const cards = ['Карточка 1', 'Карточка 2', 'Карточка 3', 'Карточка 4', 'Карточка 5'];



// cards.splice(4, 1);
// console.log(cards);


// cards.splice(4, 0, 'Нова карточка 228');
// console.log(cards);


// cards.splice(0, 1, 'Оновлена карточка 1');
// console.log(cards);







const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let totalSum = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        totalSum += matrix[i][j];
    }
}

console.log(totalSum);












