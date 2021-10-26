const fallingApple = document.querySelector("#apple");
let startStopBtn = document.querySelector('#start');
let resetBtn = document.querySelector('#reset');

console.log(startStopBtn)

let active = false;
let count = 0;
let idInterval;
fallingApple.style.position = 'absolute';
startStopBtn.style.position = 'relative';
startStopBtn.style.position = 'relative';

const fallAnimation = () => {
    count++;
    idInterval = requestAnimationFrame(fallAnimation);
    if (count < 600){
        fallingApple.style.top = `${count}px`;
    } else {
        cancelAnimationFrame(idInterval)
    }
}

startStopBtn.addEventListener('click', () => {
    if(active){
        cancelAnimationFrame(idInterval)
        active = !active;
    } else {
        idInterval = requestAnimationFrame(fallAnimation);
        active = !active;
    }
})

resetBtn.addEventListener('click', () => {
    cancelAnimationFrame(idInterval)
    active = false;
    fallingApple.style.top = `0px`;
    count = 0;
})
