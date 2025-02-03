function updateTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  const utcTime = now.toUTCString();
  utcTimeElement.textContent = utcTime;
}

// Update UTC time when the page is loaded
window.addEventListener("load", updateTime);
