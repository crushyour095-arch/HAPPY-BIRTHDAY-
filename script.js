const openBtn = document.getElementById('openBtn');
const wishBtn = document.getElementById('wishBtn');
const wishResult = document.getElementById('wishResult');

openBtn.addEventListener('click', () => {
  document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
  burst();
});

wishBtn.addEventListener('click', () => {
  wishResult.textContent = 'A little sparkle for your day — may your wish find its way to you. ✨';
  burst();
});

function burst() {
  const layer = document.querySelector('.sparkles');
  const symbols = ['✦', '✧', '♡', '·'];
  for (let i = 0; i < 22; i++) {
    const item = document.createElement('span');
    item.className = 'sparkle';
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.top = (55 + Math.random() * 40) + 'vh';
    item.style.fontSize = (12 + Math.random() * 18) + 'px';
    item.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
    layer.appendChild(item);
    item.addEventListener('animationend', () => item.remove());
  }
}
