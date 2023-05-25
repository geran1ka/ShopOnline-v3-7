import {timerRender} from './timerRender.js';
import {declOfNum} from './function/decl0fNum.js';

export const timerControl = (timer, deadline) => {
  const timerElem = timerRender(timer);
  const timeZoneMinutes = (deadline.getTimezoneOffset() + 180);

  deadline.setMinutes(deadline.getMinutes() + timeZoneMinutes);
  
  const getTimeRemeining = () => {
    const dateNow = Date.now() + timeZoneMinutes * 1000 * 60;
    const timeRemaining = deadline.getTime() - dateNow;


    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24 % 30);
    return {timeRemaining, seconds, minutes, hours, days};
  };

  const start = () => {
    const time = getTimeRemeining();

    const seconds = declOfNum(time.seconds, ['секунда', 'секунды', 'секунд']);
    const minutes = declOfNum(time.minutes, ['минута', 'минуты', 'минут']);
    const hours = declOfNum(time.hours, ['час', 'часа', 'часов']);
    const days = declOfNum(time.days, ['день', 'дня', 'дней']);

    const oneDaysAllMs = 1000 * 60 * 60 * 24;
    const intervalId = setTimeout(start, 1000);

    if (time.timeRemaining < 0) {
      clearTimeout(intervalId);
      timer.classList.add('timer_disabled');
    } else if (time.timeRemaining <= oneDaysAllMs) {
      timer.classList.add('timer_green');
      timerElem.timerCountDays.textContent = hours.n < 10 ? '0' + hours.n : hours.n;
      timerElem.timerUnitsDays.textContent = hours.title;
      timerElem.timerCountHours.textContent = minutes.n < 10 ? '0' + minutes.n : minutes.n;
      timerElem.timerUnitsHours.textContent = minutes.title;
      timerElem.timerCountMinutes.textContent = seconds.n < 10 ? '0' + seconds.n : seconds.n;
      timerElem.timerUnitsMinutes.textContent = seconds.title;
    } else {
      timerElem.timerCountDays.textContent = days.n < 10 ? '0' + days.n : days.n;
      timerElem.timerUnitsDays.textContent = days.title;
      timerElem.timerCountHours.textContent = hours.n < 10 ? '0' + hours.n : hours.n;
      timerElem.timerUnitsHours.textContent = hours.title;
      timerElem.timerCountMinutes.textContent = minutes.n < 10 ? '0' + minutes.n : minutes.n;
      timerElem.timerUnitsMinutes.textContent = minutes.title;
    }
  };
  start();
};
