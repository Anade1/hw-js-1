// Завдання 1

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(`${i + 1} - ${array[i]}`);
//     }
//   }

//   const fruit = ['Mango', 'Poly', 'Ajax'];
//   logItems(fruit);
  





//   Завдання 2

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
//     const count = words.length;
//     const totalPrice = count * pricePerWord;
  
//     return totalPrice;
//   }
  
//   const message = 'John Marston, Arthur Morgan';
//   const pricePerWord = 15;
  
//   const price = calculateEngravingPrice(message, pricePerWord);
//   console.log(price)
  





//   Завдання 3

// function findLongestWord(string) {
//     const bigWords = string.split(' ');
//     let bigestWord = '';


//     for (const smallWord of bigWords) {
//       if (smallWord.length > bigestWord.length) {
//         bigestWord = smallWord;
//       }
//     }
  
//     return bigestWord;
//   }
//   const sentence = 'Дуже довге слово в цьому реченні😱';
//   const bigestWord = findLongestWord(sentence);
//   console.log(bigestWord);



//   Завдання 4

// function formatString(string) {
//     const maxLength = 46;
  
//     if (string.length <= maxLength) {

//       return string;
//     } else {
     
//       const smallString = string.slice(0, maxLength) + '...';
//       return smallString;
//     }
//   }
  
//   const longString = 'Велике речення, 100 мільйонів символів та води, зараз я вам розповім дуже довгу історію за темою аллігатори у темряві Ліберії при Америці';
//   const alligatorString = formatString(longString);
//   console.log(alligatorString);
  
//   const shortString = 'Велике речення, 100 мільйонів';
//   const millionString = formatString(shortString);
//   console.log(millionString);






// Завдання 5

// function checkForSpam(message) {
//     const popularWord = message
//     return popularWord.includes('spam') || popularWord.includes('sale');
//   }
  
//   console.log(checkForSpam('Hi Dr, What is paracetamol?'));
//   console.log(checkForSpam('Look for this nice sale!!!!!🤑🤑🤑'));
//   console.log(checkForSpam('Why my gmail ahh emails sending to spam?'));
  
 
  


  // Завдання 6 

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число:');

  if (input === null) {
    break;
  }

  const anotherInput = parseFloat(input);

  if (isNaN(anotherInput)) {
    alert('введено не число');
  } else {
    numbers.push(anotherInput);
  }
}

for (const number of numbers) {
  total += number;
}

if (numbers.length > 0) {
  console.log(total);
} else {
  console.log('Масив порожній');
}



 // Завдання 7



 const logins = ["user1", "user2", "user3"];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін вже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}






const newLogin = prompt('Введіть новий логін:');
const result = addLogin(logins, newLogin);

console.log(result);
console.log(logins);
