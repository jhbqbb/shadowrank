const languageMenu = document.getElementById("languageMenu");
const languageToggle = document.getElementById("languageToggle");
const languageDropdown = document.getElementById("languageDropdown");
const particles = document.getElementById("particles");

function setLanguageMenu(open) {
  if (!languageMenu || !languageToggle || !languageDropdown) return;
  languageMenu.classList.toggle("open", open);
  languageToggle.setAttribute("aria-expanded", String(open));
  languageDropdown.setAttribute("aria-hidden", String(!open));
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const isOpen = languageMenu?.classList.contains("open");
    setLanguageMenu(!isOpen);
  });
}

document.addEventListener("click", (event) => {
  if (!languageMenu) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (!languageMenu.contains(target)) {
    setLanguageMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setLanguageMenu(false);
  }
});

if (particles) {
  for (let index = 0; index < 28; index += 1) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    dot.style.animationDuration = `${6 + Math.random() * 5}s`;
    particles.appendChild(dot);
  }
}
