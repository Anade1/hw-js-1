// Завдання 1

// const button = document.getElementById('button');

// button.addEventListener('click', () => {
//     alert('Hello World!');
// });





// Завдання 2

    // const randomNumber = Math.floor(Math.random() * 100) + 1;

    // function checkGuess() {
    //     const userGuess = document.getElementById("guessField").value;

    //     if (userGuess === "") {
    //         document.getElementById("guessResult").textContent = "введіть число";
    //     } else {
    //         const guess = parseInt(userGuess);
    //         if (guess === randomNumber) {
    //             document.getElementById("guessResult").textContent = "ви вгадали число";
    //         } else {
    //             document.getElementById("guessResult").textContent = "ви не вгадали число";
    //         }
    //     }
    // }


// Завдання 3

// let clickCount = 0;

//     document.addEventListener("click", () => {
//         clickCount++;
//         document.getElementById("clickCount").textContent = clickCount;
//     });








// Завдання 4

// const applyCallbackToEachElements = (arr, callback) => {
//     const resultArray = arr.map(callback);
//     return resultArray;
// }

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num;

// const result = applyCallbackToEachElements(arr, squareCallback);

// console.log(result);





// Завдання 5

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
    console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);

