// Задання 1

// let users = [
//     {name: 'Bob', id: 1},
//     {name: 'Jane', id: 2},
//     {name: 'Petro', id: 3},
//   ];
  
//   let imperative = [];
//   for (let i = 0; i < users.length; i++) {
//     imperative.push(users[i].name);
//   }
  
//   console.log(imperative);



//   let declarative = users.map(function(user) {
//     return user.name;
//   });
  
//   console.log(declarative);









  // Задання 2


//   let users = [
//     {eyeColor: 'сині', id: 1},
//     {eyeColor: 'коричневі', id: 2},
//     {eyeColor: 'сірі,', id: 3},
//   ];

//   let desiredEyeColor = 'сині';

//   let usersWithDesiredEyeColor = users.filter(function(user) {
//     return user.eyeColor === desiredEyeColor;
//   });
  
//   console.log(usersWithDesiredEyeColor);
  

// Задання 3

// const users = [
//     {name: 'Bob', gender: 'male'},
//     {name: 'Jessica', gender: 'female'},
//     {name: 'Rick', gender: 'male'},
//     {name: 'Angela', gender: 'female'}
// ];

// const female = [];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].gender === 'female') {
//     female.push(users[i].name);
//   }
// };


// console.log(female)
  





// Задання 4

// let users = [
//     {name: 'Rick', isActive: true },
//     {name: 'Jane', isActive: false },
//   ];
  
// let inactiveUsers = users.filter((user) => !user.isActive);

// console.log(inactiveUsers);



// Задання 5

// let users = [
//     {name: 'Rick Grimes', email: 'rick@gmail.com' },
//     {name: 'Bob', email: 'bob@gmail.com' },

//   ];

//   let userEmail = 'rick@gmail.com';
//   let foundUser = users.find((user) => user.email === userEmail);
//   console.log(foundUser);
  

// Задання 6



// let users = [
//     {name: 'Rick', age: 40 },
//     {name: 'Tim', age: 20 },
//     {name: 'Max', age: 9 },
//   ];

//   function getUsers(users, min, max) {
//     return users.filter((user) => user.age >= min && user.age <= max);
//   }
  
//   let minAge = 25;
//   let maxAge = 40;
//   let usersAge = getUsers(users, minAge, maxAge);
//   console.log(usersAge);