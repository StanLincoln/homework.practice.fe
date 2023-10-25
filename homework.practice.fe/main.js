// 1. Условные операторы (if, else).

//     - продолжаем работу с логическими операторами. Теперь нам нужно проверить, что возраст пользователя лежит ВНЕ диапазона 21-45. То есть, мы запрашиваем возраст методом prompt, и если возраст меньше 21 ИЛИ больше 45 - выводим в консоль сообщение "Доступ открыт". Если возраст в диапазоне - ничего не делаем.
//  - работаем с оператором отрицания ! (логическое НЕ). Переписать предыдущую задачу так, чтобы там использовалось отрицание.

// const age = +prompt("Enter your age: ");
// if (!(age >= 21 && age <= 45)) console.log("access allowed");

// - Задача "со звездочкой". Запросить у пользователя его имя методом `prompt`. Если пользователь ввел пустую строку или 0 - ввыести в консоль сообщение "Имя неверно!". При этом НЕ использовать логическое ИЛИ.

// const userName = prompt("Enter your name: ");
// if(userName === "") console.log("Name's not right!");
// else if(userName == 0) console.log("Name's not right!");
// else console.log("Access allowed");

// 2. Оператор switch

//  - пишем блок кода, который поприветствует пользователя на его родном языке. Запрашиваем у пользователя через метод `prompt` страну происхождения ("Откуда Вы родом?"). Если страна - Россия, то выводим в консоль "Добрый день!", если Украина - выводим "Доброго дня!", Беларусь - "Добры дзень!", Германия - "Guten Tag!".

// const country = prompt("Where are you from?");
// switch (country) {
//     case "Russia":
//         console.log("Добрый день!");
//         break;
//     case "Ukraine":
//         console.log("Доброго дня!");
//         break;
//     case "Belarus":
//         console.log("Добры дзень!");
//         break;
//     case "Germany":
//         console.log("Guten Tag!");
//         break;
// }

//  - добавляем в наш предыдущий блок рассмотрение случая "по умолчанию". Если страна нам неизвестна - то приветствуем на русском языке.

// const country = prompt("Where are you from?");
// switch (country) {
//     case "Russia":
//         console.log("Добрый день!");
//         break;
//     case "Ukraine":
//         console.log("Доброго дня!");
//         break;
//     case "Belarus":
//         console.log("Добры дзень!");
//         break;
//     case "Germany":
//         console.log("Guten Tag!");
//         break;
//     default:
//         console.log("Привет");
//         break;
// }

// 3. Тернарный условный оператор

//  - запросить у пользователя город, откуда он родом. Если город соответствует вашему родному городу, выводим в консоль "Привет, земляк!", иначе - выводим "Отличный город!". Для этого используем тернарный условный оператор.

// const city = prompt("Enter your home city:");
// const greeting = (city === "Odesa") ? "Hello, bro!" : "Great city!";
// console.log(greeting);

// 4. Циклы

//  - написать цикл, который 10 раз выведет в консоль "Простая итерация". Написать 3 разных варианта: с предусловием (while), с постусловием (do ... while), и с параметром (for).

// for (let i = 0; i < 10; i++) {
//   console.log("Simple iteration");
// }

// let i = 0;
// while (i < 10) {
//     console.log("Simple iteration");
//     i++;
// }

// let i = 0;
// do {
//     console.log("Simple iteration");
//     i++;
// } while (i < 10);

// - добавляем условие. Теперь, запускаем расчет факториала только если введенное число меньше 10. Если пользователь ввел число больше 10 - выводим сообщение "Это я считать не буду - тяжко."

// const num = +prompt('Enter a number');
// let result = 1;
// for (let i = 1; i <= num; i++) {
//   result *= i;
// }
// if(num < 10) console.log('result', result);
// else console.log("Это я считать не буду - тяжко.");

// 5. Function Expression, Function Declaration

//  - создать функцию `getSum`, которая принимает два аргумента, и возвращает их сумму. Использовать Function Declaration.

// function getSum(a, b){
//     return a + b;
// }
// const result = getSum(3, 4);
// console.log(result);

//  - попробовать вызвать функцию ДО ее объявления.

// const result = getSum(3, 4); /* hoisting */
// console.log(result); 
// function getSum(a, b) {
//     return a + b;
// }

//  - переписать задание 1, использовать Function Expression.

// const getSum = function(a, b){
//     return a + b;
// }
// console.log(getSum(3, 4));

//  - попробовать вызвать результат задания 3 ДО Function Expression

// console.log(getSum(3, 4)); /*Cannot access 'getSum' before initialization*/
// const getSum = function(a, b){
//     return a + b;
// }

//  - написать функцию-калькулятор. Она принимает 3 аругмента: два числа и название математической операци (`plus`, `minus`, `multiply`, `divide`). И должна вернуть, соответственно, сумму, разность, произведение или частное двух чисел.

// function calc(){
//     const num1 = +prompt("Enter the first number:");
//     const num2 = +prompt("Enter the second number:");
//     const operationName = prompt("Enter the math operation name:");

//     let result;

//     switch (operationName) {
//         case "plus":
//             result = num1 + num2;
//             break;
//         case "minus":
//             result = num1 - num2;
//             break;
//         case "multiply":
//             result = num1 * num2;
//             break;
//         case "divide":
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                     console.log("Error: you cannot divide by 0");
//                     return; 
//             }
//             break;
//         default:
//                 console.log("Error: Incorrect operation.");
//                 return;
//     }
//      return result;
// }
//     const result = calc();
//     console.log("Result: ", result);

// 6. Массивы.

//  - дан массив numbers. Посчитать сумму элементов массива, результат вывести в консоль.

const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

//  - вывести в консоль только четные элементы массива numbers (те, которые делятся на 2 без остатка)

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]%2 === 0 && numbers[i] !== 0) console.log(numbers[i]);
// }

//  - вывести в консоль только те элементы массива numbers, которые делятся без остатка на 2 и на 3.

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]%2 === 0 && numbers[i]%3 === 0 && numbers[i] !== 0) console.log(numbers[i]);
// }

//  - добавить в массив numbers число 11 (в конец).

// numbers.push(11);
// console.log(numbers);

//  - убрать из массива numbers число 11 (из конца).

// numbers.pop();
// console.log(numbers);

//  - переместить первый элемент массива numbers в конец массива.

// const firstElement = numbers.shift();
// numbers.push(firstElement);
// console.log(numbers);

//  - вернуть элемент обратно.

// const lastElement = numbers.pop();
// numbers.unshift(lastElement);
// console.log(numbers);

//  - получить массив, который состоит из "среза" массива numbers, начиная с 3-го элемента.

// const newArr = numbers.slice(2);
// console.log(newArr);

//  - Задача "со звездочкой". Вывести в консоль тексты всех параграфов на странице. Для этого, нам нужно воспользоваться методом `querySelectorAll`, который нам возвращает объект, по которому можно пройтись циклом.

// const paragraphs = document.querySelectorAll('p');
// for(let elem of paragraphs){
//     console.log(elem.innerText);
// }
