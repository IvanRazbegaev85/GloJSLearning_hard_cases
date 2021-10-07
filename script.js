'use strict';

/*
Lesson 03 hard, case 1
 */

//Решение через объект (ассциативный массив):

let lang = prompt("Please enter your locale (en/ru)", "en");

const daysOfWeek = {
    "en": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    "ru": ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
};

if (lang && typeof lang === "string" && lang.toLowerCase() == "en"){
    console.log(daysOfWeek.en.join(", "));
} else if (lang && typeof lang === "string" && lang.toLowerCase() == "ru"){
    console.log(daysOfWeek.ru.join(", "));
} else console.log("No such locale");

// Решение через "if":

if (lang === "en"){
    console.log(daysOfWeek.en.join(", "));
} else if (lang === "ru"){
    console.log(daysOfWeek.ru.join(", "));;
} else console.log('No such locale');

// Решение через switch()

switch (true){
    case lang === "en":
        console.log(daysOfWeek.en.join(", "));
        break;
    case lang === "ru":
        console.log(daysOfWeek.ru.join(", "));
        break;
    default:
        console.log("No such locale");
        break;
}

/*
Lesson 03 hard, case 2
 */
let namePerson = prompt("Введите имя: ");

namePerson === "Артем" ? console.log("Директор") :
    namePerson === "Александр" ? console.log("Преподаватель") : console.log("Студент");
