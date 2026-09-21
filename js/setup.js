document.addEventListener("DOMContentLoaded", () => {
    // Footer Year
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Local Clock
    updateClock();
    setInterval(updateClock, 1000);
});

function copyEmail(buttonEl) {
    navigator.clipboard.writeText("him@ceejaycicala.com");

    const toast = document.getElementById("toast");
    if (toast) {
        toast.classList.add("show");
    }

    if (buttonEl) {
        buttonEl.classList.add("is-copied");
    }

    setTimeout(() => {
        if (toast) {
            toast.classList.remove("show");
        }
        if (buttonEl) {
            buttonEl.classList.remove("is-copied");
        }
    }, 1500);
}

function updateClock() {
    const clockElement = document.getElementById("local-clock");
    if (!clockElement) return;

    const now = new Date();

    // Enforce Melbourne timezone
    const timeString = now.toLocaleTimeString("en-AU", {
        timeZone: "Australia/Melbourne",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

    clockElement.textContent = timeString;

    const options = { timeZone: "Australia/Melbourne", hour: "2-digit", minute: "2-digit", hour12: false };
    const melbourneTimeStr = now.toLocaleTimeString("en-AU", options);
    clockElement.setAttribute("datetime", melbourneTimeStr);
}