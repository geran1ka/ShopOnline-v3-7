'use strict';

const timer = (dedline) => {
  const timerDays = document.querySelector('.timer__count-days');
  const timerHours = document.querySelector('.timer__count-hours');
  const timerMinutes = document.querySelector('.timer__count-minutes');

  const getTimeRemeining = () => {
    const deteStop = new Date(dedline).getTime();
    const dateNow = Date.now();
    const timeRemaining = deteStop - dateNow;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {timeRemaining, seconds, minutes, hours, days};
  };

  const start = () => {
    const timer = getTimeRemeining();
    timerDays.textContent = timer.days;
    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;

    const intervalId = setTimeout(start, 1000);

    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
    }
  };

  start();
};

//timer('2023/05/26 16:00');
