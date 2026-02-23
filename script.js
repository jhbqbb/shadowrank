const particleHost = document.getElementById("particles");
const ticker = document.getElementById("statusTicker");
const revealItems = document.querySelectorAll(".reveal");

if (particleHost) {
  const total = 34;
  for (let index = 0; index < total; index += 1) {
    const dot = document.createElement("span");
    dot.className = "particle";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${12 + Math.random() * 86}%`;
    dot.style.animationDelay = `${Math.random() * 4}s`;
    dot.style.animationDuration = `${5 + Math.random() * 6}s`;
    particleHost.appendChild(dot);
  }
}

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (ticker) {
  const messages = [
    "Hunter calibration active",
    "Quest feed synchronized",
    "Rank protocols secured",
    "Awakening queue prioritized",
  ];

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % messages.length;
    ticker.style.opacity = "0.15";
    window.setTimeout(() => {
      ticker.textContent = messages[currentIndex];
      ticker.style.opacity = "1";
    }, 180);
  }, 2600);
}
