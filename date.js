const dateContainer = document.querySelector(".current-date");
const p = document.createElement("p");
dateContainer.appendChild(p);

const updateDate = () => {
  const now = new Date();
  const timeString = `${now.toLocaleTimeString()}.${now.getMilliseconds()}`;
  p.textContent = timeString;
};

updateDate();

setInterval(updateDate, 1000);
