const bluetooth = navigator.bluetooth;
const deviceName = 'Mi dispositivo Bluetooth';
const options = {
    filters: [{ name: deviceName }],
    optionalServices: ['battery_service']
};

console.log(bluetooth);
