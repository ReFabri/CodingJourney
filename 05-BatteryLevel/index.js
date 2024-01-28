const getBatteryInfo = async () => {
  const batteryInfo = await navigator.getBattery();
  console.log(batteryInfo);
};
getBatteryInfo();
