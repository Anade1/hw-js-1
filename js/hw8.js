// Завдання 1

// Глобальна змінна
// const balance = 1000;    



// if (balance > 0) {
//     // Локальна змінна
//     let price;
//     price = "Навушники коштують 500грн";
  
//   console.log(price)
// }

// console.log(price)



// Завдання 2

// let language = 'fr'; 

// switch (language) {
//   case 'ua':
//   console.log('Січень');
//   break;

//   case 'en':
//   console.log('January');
//   break;

//   case 'fr':
//   console.log('Janvier');
//   break;

//   default:
//     console.log('Мова не підтримується');
// }



// Завдання 3

// let food = prompt("Кава, Чай або Сік.");
// let price = 0;

// switch (food) {
//   case 'Кава':
//     price = 2.5; 
//     break;
//   case 'Чай':
//     price = 1.5; 
//     break;
//   case 'Сік':
//     price = 2.0;
//     break;
//   default:
//     alert('Виберіть напій: Кава, Чай або Сік.');
// }

// if (price > 0) {

//   alert('Ціна: ' + price + ' грн.');


// }



// Завдання 4

// let week = prompt("Який день тижня сьогодні?");
// let result;

// switch (week) {
//   case 'понеділок':
//   case 'вівторок':
//   case 'середа':
//   case 'четвер':
//   case "п'ятниця":
//     result = 'робочий';
//     break;

//   case 'субота':
//   case 'неділя':
//     result = 'вихідний';
//     break;
// }

// alert('Сьогодні - ' + result);




// Завдання 5

let number = prompt("Який номер поточного місяця? число від 1 до 12.");
let monthNumber = number;
let season;

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'літо';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осінь';
    break;
}

alert('Цей місяць ' + season);

