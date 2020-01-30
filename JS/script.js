const timer = document.querySelector('.countdown');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus_hour = document.querySelector('.plus-hour');
const plus_minute = document.querySelector('.plus-minute');
const plus_second = document.querySelector('.plus-second');
const pause = document.querySelector('.pause');

const minus_hour = document.querySelector('.minus-hour');
const minus_minute = document.querySelector('.minus-minute');
const minus_second = document.querySelector('.minus-second');
const reset = document.querySelector('.reset');

const start = document.querySelector('.start');

let countHour = 0;
let countSec = 0;
let countMin = 0;

const updateText = () =>{
  hours.innerHTML = (0 + String(countHour)).slice(-2);	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	
  let total = countSec + countMin * 60 + countHour * 3600;
  console.log(total)
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<h1>Game Over...</h>'
  }
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  } 
  updateText();
}

plus_second.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

plus_minute.onclick = () =>{
  if(countMin < 59) ++countMin;
  else{
  	countMin = 0;
  	++countMin;
  }
  updateText()
}

plus_hour.onclick = () =>{
  if(countHour < 23) ++countHour;
  updateText()
}

plus_second.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

minus_second.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}

start.onclick = () => {
	  countDown();  
}