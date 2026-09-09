function updateClock() {
    const now = new Date();

    const timeString = now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    const clockElement = document.getElementById('local-clock');
    clockElement.textContent = timeString;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.setAttribute('datetime', `${hours}:${minutes}`);
}

updateClock();

setInterval(updateClock, 1000);