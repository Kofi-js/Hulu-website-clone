const menu = document.querySelector('.menu');
const info = document.querySelector('.info');

menu.addEventListener('click', () => {
  if (info.style.display === 'flex') {
    info.style.display = 'none';
  } else {
    info.style.display = 'flex';
  }
});
