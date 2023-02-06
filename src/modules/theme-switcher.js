const icon = document.querySelector('.icon');

if (localStorage.getItem('theme') === 'null') {
  localStorage.setItem('theme', 'light');
}

const localData = localStorage.getItem('theme');

if (localData === 'light') {
  icon.src = 'assets/moon.svg';
  document.body.classList.remove('dark-theme');
} else if (localData === 'dark') {
  icon.src = 'assets/sun.svg';
  document.body.classList.add('dark-theme');
}

icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'assets/sun.svg';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.src = 'assets/moon.svg';
    localStorage.setItem('theme', 'light');
  }
});
