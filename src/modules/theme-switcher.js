const themeToggle = document.querySelector('#theme-toggle');
const modePref = localStorage.getItem('modePref');

themeToggle.addEventListener('click', () => {
  document.body.classList.contains('light-theme')
    ? enableDarkMode()
    : enableLightMode();
});

themeToggle.addEventListener('mouseleave', () => {
  themeToggle.blur();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    themeToggle.blur();
  }
});

const enableDarkMode = () => {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-label', 'Switch to the light theme');
  localStorage.setItem('modePref', 'dark');
};

const enableLightMode = () => {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
  themeToggle.setAttribute('aria-label', 'Switch to the dark theme');
  if (localStorage.getItem('modePref') === 'dark') {
    localStorage.setItem('modePref', 'light');
  }
};

const setThemePreference = () => {
  if (modePref === 'dark') {
    enableDarkMode();
  } else if (modePref === 'light') {
    enableLightMode();
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
};

document.onload = setThemePreference();
