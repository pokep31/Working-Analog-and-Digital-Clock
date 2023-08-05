let hr = document.querySelector('#hrs');
let mn = document.querySelector('#min');
let sc = document.querySelector('#sec');

// setInterval() es para que haga los cálculos constantemente y mueva el segundero
setInterval(()=>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})

// Digital Clock
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

setInterval(() => { 
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

// Convert 24Hrs clock to 12Hrs clock
if (h > 12){
  h = h - 12
}

// Add Zero before sigle digit numbers
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hour.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;

var am = h >= 12 ? "PM" : "AM";
ampm.innerHTML = am
});