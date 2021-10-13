const longTimeFormat = function () {
    let date = new Date();
    let ddmmYYYY = date.toLocaleString("ru",{
        weekday:"long",
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    let hoursFormat = function (date) {
        let hours = date.getHours();
        return hours === 1 || hours === 21 ? hours+' час' : hours >1 && hours < 5 || hours >21 && hours < 25 ? hours+' часа': hours+' часов';
    }

    let minutesFormat = function (date) {
        let minutes = date.getMinutes();
        return minutes === 1 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51 ? minutes+' минута'
            : minutes >1 && minutes < 5 || minutes > 21 && minutes < 25 || minutes > 31 && minutes < 35 || minutes > 41 && minutes < 45 || minutes > 51 && minutes < 55 ? minutes+' минуты'
                : minutes+' минут';
    }
    let secondsFormat = function (date) {
        let seconds = date.getSeconds();
        return seconds === 1 || seconds === 21 || seconds === 31 || seconds === 41 || seconds === 51 ? seconds+' секунда'
            : seconds >1 && seconds < 5 || seconds > 21 && seconds < 25 || seconds > 31 && seconds < 35 || seconds > 41 && seconds < 45 || seconds > 51 && seconds < 55 ? seconds+' секунды'
                : seconds+' секунд';
    }

    return `Сегодня ${ddmmYYYY} ${hoursFormat(date)} ${minutesFormat(date)} ${secondsFormat(date)}`;
}

function shortTimeFormat(){
    let date = new Date();
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
}
for (let i = 0; i < 2; i++){
    document.body.append(document.createElement("div"));
}

let timeArea1 = document.querySelectorAll("div")[0];
let timeArea2 = document.querySelectorAll("div")[1];
setInterval(()=>timeArea1.innerHTML = longTimeFormat());
timeArea2.innerHTML = shortTimeFormat();






