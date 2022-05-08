const value1 = prompt('Будь ласка введіть число #1:');
const value2 = prompt('Будь ласка введіть число #2:');

const value1Num = parseInt(value1);
const value2Num = parseInt(value2);

if (!isNaN(value1Num) && !isNaN(value2Num)) {
    console.log(value1Num.toString(value2Num));
} else {
    console.log('Некоректне значення');
}







