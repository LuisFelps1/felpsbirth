const targetDate = new Date("2024-12-25T00:00:00"); // Data da festa
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
        document.querySelector('.countdown').innerHTML = "A festa j\xe1 come\xe7ou!";
        return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff % 86400000 / 3600000);
    const minutes = Math.floor(diff % 3600000 / 60000);
    const seconds = Math.floor(diff % 60000 / 1000);
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

//# sourceMappingURL=index.c4775257.js.map
