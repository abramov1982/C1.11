const timer = document.querySelector('.countdown');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
const timer_block = document.querySelector('.timer-block')

const plus_hour = document.querySelector('.plus-hour');
const plus_minute = document.querySelector('.plus-minute');
const plus_second = document.querySelector('.plus-second');

const minus_hour = document.querySelector('.minus-hour');
const minus_minute = document.querySelector('.minus-minute');
const minus_second = document.querySelector('.minus-second');
const reset = document.querySelector('.reset');

const start = document.querySelector('.start');
const restart = document.querySelector('.restart');
const restart_button = document.querySelector('.restart-button')

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
  start.style.display = 'none'	
  let total = countSec + countMin * 60 + countHour * 3600;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    message.style.display = 'block';
    restart_button.style.display = 'block'
    timer_block.style.display = 'none';
  }
  minus_one_second() 
  updateText();
}

plus_second.onclick = () => {
  if(countSec < 59){
    ++countSec;
    updateText()
  }
  else{
      if(countMin < 59){
        ++countMin;
      }  
      else{
        countMin = 0;
        updateText()
        if(countHour < 23){
          ++countHour;
        }
      }
      countSec = 0;
  }
}

plus_minute.onclick = () => {
  if(countMin < 59){
    ++countMin;
    updateText()
  }
  else{
    countMin = 0;
    updateText()
  	if(countHour < 23){
      ++countHour;
      updateText()
    }
  }
}

plus_hour.onclick = () => {
  if(countHour < 23) ++countHour;
  updateText()
}

minus_second.onclick = () => {
  minus_one_second()
}

// Функция вычитания секунд, используется на кнопке и внутри таймера.
function minus_one_second() {
  if(countMin == 0 && countSec == 0 && countHour > 0){
  	countSec = 59;
    countMin = 59;
    --countHour;
    updateText()
    return;
  }
  if(countSec > 0){
    --countSec;
    updateText()
    return;
  }
  if(countSec == 0 && countMin > 0){
  	countSec = 59;
    --countMin;
    updateText()
    return;
  }
  if(countSec == 0 && countMin == 0){
    updateText()
    return;
  }
}

minus_minute.onclick = () => {
	if(countMin == 0 && countHour > 0){
    countMin = 59;
    --countHour;
    updateText();
    return;
  }
  if(countMin > 0){
    --countMin;
    updateText();
  }
}

minus_hour.onclick = () => {
	if(countHour > 0){
    --countHour;
    updateText()
    return;
  }
}

reset.onclick = () => {
  countSec = 0;
  countMin = 0;
  countHour = 0;
  updateText()
}

start.onclick = () => {
	  countDown();  
}

restart.onclick = () => {
  countSec = 0;
  countMin = 0;
  countHour = 0;
  message.style.display = 'none'
  restart_button.style.display = 'none'
  timer_block.style.display = 'block'
  start.style.display = ''
  updateText()
}