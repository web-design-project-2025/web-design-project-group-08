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

