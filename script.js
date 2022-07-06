// grab the day, hrs, secs and min

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
// const days = document.getElementById('days')

// test 
const currentYear = new Date().getFullYear()
// console.log(currentYear)

const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`)
// console.log(newYear)

// update countdown

let updateCountDownTime=()=>{
    const currentTime = new Date();
    const diff = newYear - currentTime
    // console.log(diff)
    const d = Math.floor(diff / 1000 /60/60/24)
    // console.log(d)
    const h = Math.floor(diff / 1000 /60 /60) % 24 ;
    // console.log(h);
    const m = Math.floor(diff /1000 /60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h: h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;



}
setInterval(updateCountDownTime, 1000)
// updateCountDownTime()

