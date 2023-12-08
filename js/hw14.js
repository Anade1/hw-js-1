// Завдання 1

// let bankAccount = {
//     ownerName: "Тимофій Шевченко",
//     accountNumber: "123",
//     balance: 0,

//     deposit: function(amount) {
//         this.balance += amount;
//         console.log(`Поповнення на ${amount}. Залишок: ${this.balance}`);
//     },

//     withdraw: function(amount) {
//         if (amount > this.balance) {
//             console.log("Недостатньо коштів");
//         } else {
//             this.balance -= amount;
//             console.log(`Зняття ${amount}. Залишок: ${this.balance}`);
//         }
//     }
// };

// bankAccount.deposit(7777);
// bankAccount.withdraw(777);



// Завдання 2



// let weather = {
//     temperature: 0,
//     humidity: 0,
//     windSpeed: 0,

//     checkTemp: function() {
//         this.temperature = parseFloat(document.getElementById('tempInput').value);

//         if (this.temperature < 0) {
//             console.log("Температура нижче 0");
//         } else {
//             console.log("Температура вище 0");
//         }
//     }
// };





// // Завдання 3


// let user = {
//     name: "",
//     email: "",
//     password: "",

//     login: function() {
//         this.name = document.getElementById('nameInput').value;
//         this.email = document.getElementById('emailInput').value;
//         this.password = document.getElementById('passwordInput').value;

//         if (this.email === "1234@gmail.com" && this.password === "qwerty") {
//             console.log(`Вхід успішний.`);
//         } else {
//             console.log("Неправильний email або пароль");
//         }
//     }
// };






// // Завдання 4



// let movie = {
//     title: "Oppenheimer",
//     director: "Christopher Nolan",
//     year: 2023,
//     rating: 8.5,

//     checkRating: function() {
//         return this.rating > 8;
//     }
// };

// document.getElementById('title').innerText = movie.title;
// document.getElementById('director').innerText = movie.director;
// document.getElementById('year').innerText = movie.year;
// document.getElementById('rating').innerText = movie.rating;

// if (movie.checkRating()) {
//     document.getElementById('title').style.color = 'green';
// }