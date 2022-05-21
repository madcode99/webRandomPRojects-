const hourEl= document.getElementById('hour')
const minEl = document.getElementById('min')
const secEl = document.getElementById('sec');
const session = document.getElementById('session')

function display_Time(){
    let date_now = new Date();
    let hrs = date_now.getHours();
    let mins = date_now.getMinutes();
    let Sec = date_now.getSeconds();
    if(hrs >= 12){
        session.innerHTML='PM';
    }else{
        session.innerHTML = 'AM'
    }
    hourEl.innerHTML = hrs;
    minEl.innerHTML =mins;
    secEl.innerHTML = Sec;
}
setInterval(display_Time , 10)