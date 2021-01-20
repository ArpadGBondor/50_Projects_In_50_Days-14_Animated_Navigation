const btn = document.getElementById('toggle');

btn.addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('active');
});
