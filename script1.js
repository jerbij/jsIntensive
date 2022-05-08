/*
1) С помощью встроенной браузерной функции prompt поочерёдно ввести два значения.
 Если оба значения являются валидными числами,
 то вывести в консоли результат в виде первого числа в системе счисления второго.
    Если хотя бы одно из введённых значений является некорректным числом,
    вывести в консоли сообщение: "Некорректный ввод!" и завершить программу.
> Примеры:
Вводим 10 и 2, получаем 1010
Вводим 872 и 8, получаем 1550
Вводим 2 и 'abc', получаем "Некорректный ввод!"

0) Створили файл для програми
1) Скопіювали задачу в коментар (на початку файла)
2) Перетворили задачу на послідовність дій, і винесли в коменти як псевдокод
2.1) (При цьому будьмо уважні, якшо зустрічаються фрази , які потребують перетворення на декілька дій.
Наприклад:
Фраза "Отримати два значення" - перетворюємо на
// отримати значення 1
// отримати значення 2
3) Знайшли "слова-трігери", наприклад "якщо", "для кожного", які підказують нам структури або цикли
4) Під кожним коментом-псевдокодом написали код
 */

// receive value 1
const value1 = prompt('Будь ласка введіть число #1:');

// receive value 2
const value2 = prompt('Будь ласка введіть число #2:');

const value1Num = parseInt(value1);
const value2Num = parseInt(value2);

// check the value1 is a number
// check the value2 is a number
if (!isNaN(value1Num) && !isNaN(value2Num)) {
    // вывести в консоли результат в виде [первого числа в системе счисления второго].
    console.log(value1Num.toString(value2Num));
} else {
    //  otherwise

    // вывести в консоли сообщение: "Некорректный ввод!"
    console.log('Некоректне значення');
}







