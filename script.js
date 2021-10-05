/*
Lesson 04 hard, part 1
 */
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

const typeOfArg = function (arg) {
    if(arg && typeof arg === "string"){
        if (arg.trim().length >= 30){
            return `${arg.trim().slice(0,30)}...`;
        } else return arg.trim();
    } else return "Это не строка";
};

console.log(typeOfArg(str));