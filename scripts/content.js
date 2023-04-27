(async () => {
  await new Promise(r => setTimeout(r, 1000)); // とりあえずちょっとスリープしとく

  const remainingElement = document.querySelector('#time-card-accordion-02 > div > div > table > tbody > tr > td:nth-child(7) > span');
  const [h, m] = remainingElement.textContent.trim().split(':');
  const remainingMinutes = Number(h) * 60 + Number(m);

  const totalDaysElement = document.querySelector('#time-card-accordion-01 > div > div > table > tbody > tr > td:nth-child(1) > span');
  const totalDays = Number(totalDaysElement.textContent.trim());

  const workingDaysElement = document.querySelector('#time-card-accordion-01 > div > div > table > tbody > tr > td:nth-child(2) > span');
  const workingDays = Number(workingDaysElement.textContent.trim());

  const paidLeaveDaysElement = document.querySelector('#time-card-accordion-01 > div > div > table > tbody > tr > td:nth-child(5) > span');
  const paidLeaveDays = Number(paidLeaveDaysElement.textContent.trim());

  const remainingDays = totalDays - workingDays - Math.floor(paidLeaveDays);
  const minutesPerDay = remainingDays > 0 ? remainingMinutes / remainingDays : 0;
  const hourPerDay = Math.ceil(minutesPerDay / 60 * Math.pow(10, 2) ) / Math.pow(10, 2); // 切り上げ

  const hourPerDayElement = document.createElement("p");
  hourPerDayElement.classList.add("p-roster-header__alert");
  hourPerDayElement.textContent = `(あと１日何時間働けばいいの？)`;

  const span = document.createElement("span");
  span.classList.add("p-roster-header__alert__value");
  span.textContent = `${hourPerDay}時間`;
  hourPerDayElement.appendChild(span);

  const header = document.querySelector('.p-roster-header');
  header.appendChild(hourPerDayElement);
})();
