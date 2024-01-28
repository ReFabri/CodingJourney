const currBatteryValue = document.querySelector(".battery-info h2");
const chargeLabel = document.querySelector(".svg-wrapper h4");
const chargeLevel = document.querySelector(".charge-level");
const chargeIcon = document.querySelector(".charge-icon");

const setDataToPage = async () => {
  const { charging, level } = await navigator.getBattery();
  currBatteryValue.innerText = `${level * 100}%`;
  chargeLevel.style.height = `${level * 100}%`;
  if (charging) {
    chargeLabel.innerText = "Charging...";
    chargeIcon.style.fill = "#94c411";
  } else {
    chargeLabel.innerText = "Discharging...";
    chargeIcon.style.fill = "#dd0000";
  }
};

setDataToPage();
setInterval(() => {
  setDataToPage();
}, 5000);
