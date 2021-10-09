let dayOfWeek = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
let weekString = "";
let currentDay = new Date().getDay();

dayOfWeek.forEach((value, index) => {
    if (index === 5 || index === 6){
        if (currentDay === index + 1){
            weekString += value.bold().italics() + "<br>";
        } else weekString += value.italics() + "<br>";
    } else if (currentDay === index){
        weekString += value.bold() + "<br>";
    } else weekString += value + "<br>";
});

document.getElementById("week").innerHTML = weekString;


