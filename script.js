const hourEl = document.querySelector('#hour');
const minutesEl = document.querySelector('#minutes');
const secondesEl = document.querySelector('#seconds');
const ampmEl = document.querySelector('#ampm');

function updateClock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = "AM";
    if(h >= 12){
        ampm = "PM";
    }

    if(h > 12){
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondesEl.innerText = s;
    ampmEl.innerText = ampm;
    // setTimeout(() => {
    //     updateClock();
    // }, 1000);
    setTimeout(updateClock, 1000);
    // setInterval(updateClock, 1000);
}

updateClock();