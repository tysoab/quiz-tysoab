import { logoutUser } from "./userLogout";

const countdownContainer = document.querySelector('.stopwatch');
const minute = countdownContainer.querySelector('.minute-el');
const second = countdownContainer.querySelector('.second-el');
let seconds = 60;
let minutes = 5;
let intervalId;

const render = function(){
second.textContent = seconds;
minute.textContent = minutes;
}


export const countdown = function(){
  clearInterval(intervalId);
  intervalId = setInterval(()=>{
    seconds--;
    render();
    if(seconds === 0){
      seconds = 60;
      minutes--;
      if(minutes === -1){
        minutes = 5;
        logoutUser();
      }
    }
  }, 1000);
}