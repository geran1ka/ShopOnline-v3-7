'use strict';

const declOfNum = (n, titles) => {
  const title = titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
  return {
    n,
    title,
  }
}

/*
const timerRender = () => {
  const timer = document.querySelector('.timer');

  const createElem = (tag, selectorName, text = '') => {
    const elem = document.createElement(tag);
    elem.classList.add(selectorName);
    elem.textContent = text
    return elem;
  }

  const timerTitle = createElem('p', 'timer__title', 'До конца акции:');
  console.log('timerTitle: ', timerTitle);
  const timerItemDays = createElem('p', 'timer__item', 'timer__item-days');
  console.log('timerItemDays: ', timerItemDays);
  //const timerCountDays = createElem('span', 'timer__count timer__count-days')
  //const timerUnitsDays = createElem('span', 'timer__units timer__units-days')
  //timerItemDays.append(timerCountDays, timerUnitsDays);

  //timer.append(timerItemDays)
  /*
  <p class="timer__title">До конца акции:</p>
  <p class="timer__item timer__item-days">
    <span class="timer__count timer__count-days">3</span>
    <span class="timer__units timer__units-days">дня</span>
  </p>
  <p class="timer__item timer__item-hours">
    <span class="timer__count timer__count-hours">8</span>
    <span class="timer__units timer__units-hours">часов</span></p>
  <p class="timer__item timer__item-minutes">
    <span class="timer__count timer__count-minutes">43</span>
    <span class="timer__units timer__units-minutes">минуты</span>
  </p>
}

timerRender()
*/
const timer = () => {
  const dedline = document.querySelector('.timer').dataset.deadline;
  const countDays = document.querySelector('.timer__count-days');
  const unitsDays = document.querySelector('.timer__units-days');
  const countHours = document.querySelector('.timer__count-hours');
  const unitsHours = document.querySelector('.timer__units-hours');
  const countMinutes = document.querySelector('.timer__count-minutes');
  const unitsMinutes = document.querySelector('.timer__units-minutes');

  const getTimeRemeining = () => {
    const deteStop = new Date(dedline).getTime();
    const dateNow = Date.now();
    const timeRemaining = deteStop - dateNow;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24 % 30);
    return {timeRemaining, seconds, minutes, hours, days};
  };



  const start = () => {
    const timer = getTimeRemeining();

    const seconds = declOfNum(timer.seconds, ['секунда', 'секунды', 'секунд']);
    const minutes = declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
    const hours = declOfNum(timer.hours, ['час', 'часа', 'часов']);
    const days = declOfNum(timer.days, ['день', 'дня', 'дней']);
    
    countDays.textContent = days.n < 10 ? '0' + days.n : days.n;
    unitsDays.textContent = days.title;
    countHours.textContent = hours.n < 10 ? '0' + hours.n : hours.n;
    unitsHours.textContent =  hours.title;
    countMinutes.textContent = minutes.n < 10 ? '0' + minutes.n : minutes.n;
    unitsMinutes.textContent = minutes.title;

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

timer();
