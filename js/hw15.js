// Завдання 1

// const user = {
//     name: 'Max',
//     age: 21,
//     hobby: 'driving',
//     premium: true
//   };
  
//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
  
//   for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
//   }


  

// Завдання 2

//   function countProps(obj) {
//     return Object.keys(obj).length;
//   }
  
//   const user = {
//     name: 'Tim',
//     age: 16,
//     hobby: 'playing video games',
//     premium: true
//   };
  
//   const numberOfProps = countProps(user);
//   console.log(numberOfProps);
  
  




// // Завдання 3


//   function findBestEmployee(employees) {
//     let maxTasks = 0;
//     let bestEmployee = '';
  
//     for (const employee in employees) {

//       if (employees[employee] > maxTasks) {
//         maxTasks = employees[employee];
//         bestEmployee = employee;
//       }
//     }
//     return bestEmployee;
//   }
  
//   const tasksCompleted = {
//     Dima: 10,
//     Bob: 22,
//     Bro: 200,
//     Sofia: 101
//   };
  
//   const bestEmployee = findBestEmployee(tasksCompleted);
//   console.log(bestEmployee);
  




// // Завдання 4


//   function countTotalSalary(employees) {
//     const salaries = Object.values(employees);
//     const totalSalary = salaries.reduce((total, salary) => total + salary, 0);
//     return totalSalary;
//   }
  
//   const employeeSalaries = {
//     Mcdonald: 50000,
//     Steve: 12345,
//     Bob: 99999999
//   };
  
//   const totalSalary = countTotalSalary(employeeSalaries);
//   console.log(totalSalary);





// // Завдання 5


//   function getAllPropValues(arr, prop) {
//     const propValues = [];
  
//     for (const obj of arr) {

//       if (prop in obj) {
//         propValues.push(obj[prop]);
//       }
//     }
//     return propValues;
//   }
  
//   const products = [
//     { name: 'Iphone', price: 1500 },
//     { name: 'Gum', price: 25 },
//     { name: 'Car', price: 25000 }
//   ];
  
//   const prices = getAllPropValues(products, 'price');
//   console.log(prices);






// // Завдання 6


  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
    return totalPrice;
  }
  
  const product = [
    { name: 'Book', price: 1000, quantity: 2 },
    { name: 'Bed', price: 500, quantity: 3 },
    { name: 'Pencil', price: 300, quantity: 4 }
  ];
  
  const totalPrice = calculateTotalPrice(product, 'Bed');
  console.log(totalPrice);
  
  
  