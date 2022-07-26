let hour = document.querySelector('.hour'),
    minute = document.querySelector('.minute'),
    seconds = document.querySelector('.second');

// const today = new Date();
// console.log(today);


function getCurrentHour() {
    let today = new Date();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentSecond = today.getSeconds();

    function getZero(num){
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }

    hour.innerHTML = getZero(currentHour);
    minute.innerHTML = getZero(currentMinute);
    seconds.innerHTML = getZero(currentSecond);
}
getCurrentHour();

let dateToday = new Date().getDate(),
    monthToday = new Date().getMonth(),
    yearToday = new Date().getFullYear();


document.querySelector('.today-date').innerHTML = `${dateToday}.${monthToday + 1}.${yearToday}`;

setInterval(getCurrentHour, 1000);