const num = 266219;
let result = 1;
let numArray = num.toString().split("");

for (let i = 0; i < numArray.length; i++){
    result *= numArray[i];
}
console.log((result ** 3).toString().slice(0,2));