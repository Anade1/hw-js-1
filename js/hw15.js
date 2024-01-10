// Завдання 1

const user = {
    name: 'Max',
    age: 21,
    hobby: 'driving',
    premium: true
  };
  
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }


  

// Завдання 2

  function countProps(obj) {
    return Object.keys(obj).length;
  }
  
  const user = {
    name: 'Tim',
    age: 16,
    hobby: 'playing video games',
    premium: true
  };
  
  const numberOfProps = countProps(user);
  console.log(numberOfProps);
  
  




// Завдання 3


  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';
  
    for (let employee in employees) {

      if (employees.hasOwnProperty(employee)) {
      
        if (typeof employees[employee] === 'number') {

            if (employees[employee] > maxTasks) {
                maxTasks = employees[employee];
                bestEmployee = employee;
            }
        } else {
            console.log(`Невірний формат ${employee}`);
        }
    }
}

return bestEmployee;
}
  
  const employees = {
    dima: 10,
    bob: 22,
    bro: 200,
    sofia: 111
  };
  
  const bestEmployee = findBestEmployee(employees);
  console.log(bestEmployee);
  




// Завдання 4


  function countTotalSalary(employees) {
    let totalSalary = 0;

    for (let employee in employees) {
      if (employees.hasOwnProperty(employee)) {
          totalSalary += employees[employee];
      }
  }
    return totalSalary;
  }
  
  const employeeSalaries = {
    mcdonald: 50000,
    steve: 12345,
    bob: 99999999
  };
  
  const totalSalary = countTotalSalary(employeeSalaries);
  console.log(totalSalary);





// Завдання 5


  function getAllPropValues(arr, prop) {
    const propValues = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty(prop)) {
        propValues.push(arr[i][prop]);
      }
    }
    return propValues;
  }
  
  const products = [
    { name: 'iphone', price: 1500 },
    { name: 'gum', price: 25 },
    { name: 'car', price: 25000 }
  ];
  
  const prices = getAllPropValues(products, 'price');
  console.log(prices);






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
    { name: 'book', price: 1000, quantity: 2 },
    { name: 'bed', price: 500, quantity: 3 },
    { name: 'pencil', price: 300, quantity: 4 }
  ];
  
  const totalPrice = calculateTotalPrice(product, 'bed');
  console.log(totalPrice);
  





  // // Завдання 7


  const account = {
    balance: 0,
    transactions: [],
  
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.transactions.push({ type: 'поповнення', amount });
        console.log(`баланс поповнено на ${amount}. ${this.balance}`);
      }
    },
  
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push({ type: 'зняття', amount });
        console.log(`Ви зняли ${amount}. Новий баланс: ${this.balance}`);
      } else {
        console.error('Недостатньо коштів');
      }
    },
  
    getBalance: function() {
      console.log(this.balance);
    },
  
    getTransactionHistory: function() {
      console.log('Історія транзакцій:');
      this.transactions.forEach(transaction => {
        console.log(`${transaction.type}: ${transaction.amount}`);
      });
    }
  };
  
  account.deposit(1000);
  account.withdraw(500);
  account.getBalance();
  account.getTransactionHistory();

  
  
  