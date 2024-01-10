// Задання 1

// const user = {
//     name: 'Max',
//     age: 21,
//     hobby: 'driving',
//     premium: true
//   };
  
//   const { name, age, hobby, premium} = user;

//   age = 30;
//   hobby = 'skydiving';
//   premium = false;
  
//   console.log(`name: ${name}`);
//   console.log(`age: ${age}`);
//   console.log(`hobby: ${hobby}`);
//   console.log(`premium: ${premium}`);
  

// Задання 2

// const user = {
//     name: 'Tim',
//     age: 16,
//     hobby: 'playing video games',
//     premium: true
//   };
  
//   const { name, age, hobby, premium } = user;
  
//   user.name = 'Tom';
//   user.age = 18;
  
//   console.log(user);
  

// Задання 3

// const employees = {
//     dima: 10,
//     bob: 22,
//     bro: 200,
//     sofia: 111
//   };
  
//   const { dima, bob, bro, sofia } = employees;
  
//   employees.dima = 150000;
//   employees.bob = 2500000;
  
//   console.log(employees);
  


// Задання 4


const employeeSalaries = {
    mcdonald: 50000,
    steve: 12345,
    bob: 99999999
  };
  
  const { mcdonald, steve, bob } = employeeSalaries;
  
  employeeSalaries.mcdonald = 0;
  employeeSalaries.steve = 15000;
  
  console.log(employeeSalaries);
  


// Задання 5


const products = [
    { name: 'iphone', price: 1500 },
    { name: 'gum', price: 25 },
    { name: 'car', price: 25000 }
  ];
  
  products[0].name = 'macbook';
  products[0].price = 2000000;
  
  console.log(products);
  


// Задання 6



const product = [
    { name: 'book', price: 1000, quantity: 2 },
    { name: 'bed', price: 500, quantity: 3 },
    { name: 'pencil', price: 300, quantity: 4 }
  ];
  
  product[2].name = 'notebook';
  product[0].price = 1200;
  
  console.log(product);
  