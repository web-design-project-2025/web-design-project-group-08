document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('news-grid');
  const res = await fetch('curiousities.json');
  const data = await res.json();
  grid.innerHTML = data.map(item => `
    <a class="news-card" href="curiosity-detail.html?id=${item.id}">
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
    </a>
  `).join('');
});

const bgImages = [
  "images/history.jpg",
  "images/global.jpg",
  "images/unpleasant.jpg",
  "images/trivia.jpg",
  "images/future.jpg",
  "images/user.jpg"
];

let idx = 0;
const body = document.body;


body.style.backgroundImage = `url('${bgImages[idx]}')`;

setInterval(() => {
  idx = (idx + 1) % bgImages.length;
  body.style.backgroundImage = `url('${bgImages[idx]}')`;
}, 3000); 