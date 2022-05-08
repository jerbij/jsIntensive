/*
2) С помощью встроенной браузерной функции prompt поочерёдно ввести два значения.
Если первое значение является невалидным числом,
вывести в консоли сообщение: "Некорректный ввод!" и завершить программу.
В ином случае, если второе значение является невалидным числом вывести такое же сообщение
об ошибке и завершить программу. Если оба значения являются валидными числами, то вывести в консоль
результат в виде: "Ответ: [сумма двух чисел], [частное двух чисел]."
> Примеры:
Вводим 10 и 2, получаем "Ответ: 12, 5."
Вводим 872 и 8, получаем "Ответ: 880, 109."
Вводим 'abc', получаем "Некорректный ввод!"
 */

// receive value1
const value1 = prompt('Будь ласка введіть число #1:');

// receive value2
const value2 = prompt('Будь ласка введіть число #2:');

const value1Num = parseInt(value1);
const value2Num = parseInt(value2);
// [control structure: if(condition) { }, else if, else , switch]
// check the value 1 is it not a number (if)
if (isNaN(value1Num)) {
    // not a number? out in console "Nekorrectny vvod!"
    console.log("Некоректне значення");
}
else if (isNaN(value2Num)) {
    // check the value 2 is it a number
    // not a number? out in console "Nekorrectny vvod!"
    console.log("Некоректне значення");
}
else {
    // otherwise -

    // out in console - "Otvet: [value1 + value2], [value1 - value2]


    const sum = value1Num + value2Num;
    const diff = value1Num - value2Num;
    console.log('Відповідь: ' + sum + ', ' + diff);
}





