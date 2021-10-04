'use strict';

//Решение через объект (ассциативный массив):

const lang = {
    "en": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    "ru": ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
};

console.log(lang.en.join(", "));           //Выводим дни недели на английском строкой
console.log(lang.ru.join(", "));           //Выводим дни недели на русском строкой

// Решение через "if":

// const lang = "";
//
// if (lang === "en"){
//     console.log('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
// } else if (lang === "ru")
//     {
//         console.log('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота');
//     } else console.log('No such locale');

// Решение через switch()

// const lang = "";
//
// switch (true){
//     case lang === "en":
//         console.log('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
//         break;
//     case lang === "ru":
//         console.log('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота');
//         break;
//     default:
//         console.log("No such locale");
//         break;
// }

