import {timerControl} from './script/timer/timerControl.js';


const timer = document.querySelector('[data-deadline]');
if (timer) {
  const deadline = timer.dataset.deadline;

  if ((new Date(deadline).getTime() - Date.now()) > 0) {
    timer.classList.remove('timer_disabled');
    timerControl(timer, deadline);
  }
}

