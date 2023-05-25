import { createElem } from "./function/createElem.js";

export const timerRender = (timer) => {
  
  const timerTitle = createElem('p', {
    classList: 'timer__title',
    textContent: 'До конца акции:',
  });

  const timerItemDays = createElem('p', {
    classList: 'timer__item timer__item-days',
  });

  const timerCountDays = createElem('span', {
    classList: 'timer__count timer__count-days',
  });
  const timerUnitsDays = createElem('span', {
    classList: 'timer__units timer__units-days',
  });
  timerItemDays.append(timerCountDays, timerUnitsDays);

  const timerItemHours = createElem('p', {
    classList: 'timer__item timer__item-hours',
  });

  const timerCountHours = createElem('span', {
    classList: 'timer__count timer__count-hours',
  });
  const timerUnitsHours = createElem('span', {
    classList: 'timer__units timer__units-hours',
  });
  timerItemHours.append(timerCountHours, timerUnitsHours);

  const timerItemMinutes = createElem('p', {
    classList: 'timer__item timer__item-minutes',
  });

  const timerCountMinutes = createElem('span', {
    classList: 'timer__count timer__count-minutes',
  });
  const timerUnitsMinutes = createElem('span', {
    classList: 'timer__units timer__units-minutes',
  });
  timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);

  timer.append(timerTitle, timerItemDays, timerItemHours, timerItemMinutes);

  return {
    timerCountDays,
    timerUnitsDays,
    timerCountHours,
    timerUnitsHours,
    timerCountMinutes,
    timerUnitsMinutes,
  };
};