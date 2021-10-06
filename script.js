let screenPrice = prompt("Введите стоимость проекта:", "   123   ");

let numTrim = function (num) {
    let isNumber = function(num){
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    if (isNumber(num)){
        screenPrice = parseFloat(num.trim());
        return screenPrice
    } else return "Это не число!";
}

console.log(numTrim(screenPrice), screenPrice, typeof screenPrice);