const socket = io();

socket.on('obd_update', function(data) {
    const rpmElement = document.getElementById('rpm');
    const speedElement = document.getElementById('speed');
    const coolantElement = document.getElementById('coolant');

    rpmElement.textContent = Math.round(data.rpm);
    speedElement.textContent = Math.round(data.speed);
    coolantElement.textContent = Math.round(data.coolant);

    if (data.coolant > 100) {
        document.getElementById('coolant-gauge').classList.add('warning');
    } else {
        document.getElementById('coolant-gauge').classList.remove('warning');
    }
});