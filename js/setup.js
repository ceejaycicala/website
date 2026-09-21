document.addEventListener("DOMContentLoaded", () => {
    // Footer Year
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Local Clock
    updateClock();
    setInterval(updateClock, 1000);

    // Change Page Title After Leaving
    const originalTitle = document.title;
    let titleTimeout;

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            titleTimeout = setTimeout(() => {
                document.title = "👋";
            }, 10000);
        } else {
            clearTimeout(titleTimeout);
            document.title = originalTitle;
        }
    });
});

// Press C to copy email shortcut
document.addEventListener("keydown", (e) => {
    const activeEl = document.activeElement;
    const isTyping = activeEl && (
        activeEl.tagName === "INPUT" ||
        activeEl.tagName === "TEXTAREA" ||
        activeEl.isContentEditable
    );

    if (!isTyping && e.key.toLowerCase() === "c" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        copyEmail();
    }
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