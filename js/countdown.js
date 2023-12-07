dayjs.extend(dayjs_plugin_duration);
function activateCountdown(element, dateString) {
  const targetDate = dayjs(dateString);

  // element.querySelector(
  //   ".until-event"
  // ).textContent = `Until ${targetDate.format("D MMMM YYYY")}`;

  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));

    if (duration.asMilliseconds() <= 0) return;
    element.querySelector(".until-numeric-seconds").textContent = duration
      .seconds()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until-numeric-minutes").textContent = duration
      .minutes()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until-numeric-hours").textContent = duration
      .hours()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until-numeric-days").textContent = duration
      .asDays()
      .toFixed(0)
      .toString()
      .padStart(2, "0");
  }, 250);
}

activateCountdown(document.getElementById("myCountdown"), "2023-12-16");
