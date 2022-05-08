const value1 = prompt('Будь ласка введіть число #1:');
const value2 = prompt('Будь ласка введіть число #2:');

const value1Num = parseInt(value1);
const value2Num = parseInt(value2);

if (isNaN(value1Num)) {
    console.log("Некоректне значення");
} else if (isNaN(value2Num)) {
    console.log("Некоректне значення");
} else {
    const sum = value1Num + value2Num;
    const diff = value1Num - value2Num;
    console.log('Відповідь: ' + sum + ', ' + diff);
}





