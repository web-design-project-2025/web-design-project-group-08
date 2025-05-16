document.addEventListener('DOMContentLoaded', async () => {
  // 获取 URL 参数
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  // 加载 JSON 数据
  const res = await fetch('curiousities.json');
  const data = await res.json();

  // 查找对应条目
  const item = data.find(entry => entry.id === id);
  const detailSection = document.getElementById('news-detail');

  if (!item) {
    detailSection.innerHTML = '<p>Sorry, article not found.</p>';
    detailSection.style.display = 'block';
    return;
  }

  // 渲染内容
  detailSection.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.summary}</p>
    <ul>
      ${item.details.map(d => `<li>${d}</li>`).join('')}
    </ul>
  `;
  detailSection.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  const res = await fetch('curiousities.json');
  const data = await res.json();

  const item = data.find(entry => entry.id === id);
  const detailSection = document.getElementById('news-detail');

  if (!item) {
    detailSection.innerHTML = '<p>Sorry, article not found.</p>';
    return;
  }

  // 可选：为每个主题加一张图片（你可以根据id自定义图片路径）
  let imgHtml = '';
  if (item.id === 'history') imgHtml = '<img src="images/history.jpg" alt="History of Desserts" class="detail-img">';
  if (item.id === 'global') imgHtml = '<img src="images/global.jpg" alt="Global Desserts" class="detail-img">';
  if (item.id === 'unpleasant') imgHtml = '<img src="images/unpleasant.jpg" alt="Unpleasant Desserts" class="detail-img">';
  if (item.id === 'trivia') imgHtml = '<img src="images/trivia.jpg" alt="Dessert Trivia" class="detail-img">';
  if (item.id === 'future') imgHtml = '<img src="images/future.jpg" alt="Future Desserts" class="detail-img">';
  if (item.id === 'user') imgHtml = '<img src="images/user.jpg" alt="User Submissions" class="detail-img">';

  detailSection.innerHTML = `
    <h2>${item.title}</h2>
    ${imgHtml}
    <div class="article-content">
      ${item.details.map(paragraph => `<p>${paragraph}</p>`).join('')}
    </div>
  `;
});