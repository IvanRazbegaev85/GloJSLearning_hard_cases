let arr = [4503, 7983, 1352, 6815, 2058, 7811, 4808];

/*
Hard lesson 5, part 2, task 1
 */

const onlyTwoOrFours = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].toString().startsWith("2") || array[i].toString().startsWith("4")){
            result.push(array[i]);
        }
    }
    return result.join(" ");
}

console.log(onlyTwoOrFours(arr));

/*
Hard lesson 5, part 2, task 2
 */
let primeNumbers = function () {
    let count = [];
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j <= i; j++){
            if (i % j == 0) count.push(j);
        }
        if (count.length == 2){
            console.log(`Делители числа ${i}: ${count[0]} и ${count[1]}`);
        }
        count = [];
    }
    return true;
}();