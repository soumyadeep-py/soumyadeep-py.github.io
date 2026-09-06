const toggleButton = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navigationMenu = document.getElementById("navigationMenu");
const root = document.documentElement;

const closeMenu = () => {
  navigationMenu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
};

menuToggle.addEventListener("click", () => {
  const isOpen = navigationMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
    : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
});

navigationMenu.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const updateThemeLabel = (isDark) => {
  toggleButton.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i> Light'
    : '<i class="fa-solid fa-moon"></i> Dark';
};

const applyTheme = (isDark) => {
  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  updateThemeLabel(isDark);
};

const savedTheme = localStorage.getItem("preferred-theme");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;
applyTheme(initialDark);

toggleButton.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
  localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
});

const cardLinkElements = document.querySelectorAll('.card-link[data-href]');
cardLinkElements.forEach(card => {
  card.addEventListener('click', () => {
    window.open(card.dataset.href, '_blank');
  });
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.open(card.dataset.href, '_blank');
    }
  });
});

document.querySelector('.be10X-Workshop').addEventListener('click', function() {
    window.open("./Certificates/be10X Workshop.pdf", "_blank");
})