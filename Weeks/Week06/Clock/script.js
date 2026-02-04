function updateClock() {
    const now = new Date();
    
    const hours = now.getHours() % 12; // 12-hour format for the circle
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate degrees (Unit / Max * 360)
    const hrDeg = (hours / 12) * 360;
    const minDeg = (minutes / 60) * 360;
    const secDeg = (seconds / 60) * 360;

    // Target the root or container to update CSS variables
    const container = document.querySelector('.clock-container');
    container.style.setProperty('--hr-deg', hrDeg);
    container.style.setProperty('--min-deg', minDeg);
    container.style.setProperty('--sec-deg', secDeg);
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Initial call