document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-btn');
  const gallerySection = document.querySelector('.usergallery');
  const likedItems = JSON.parse(localStorage.getItem('likedItems')) || {};

  function renderFavorites() {
    if (!gallerySection) return;

    const message = gallerySection.querySelector('.empty-message');
    gallerySection.querySelectorAll('img').forEach(img => img.remove());

    const favoriteItems = Object.values(likedItems).filter(item => item.liked);

    if (favoriteItems.length === 0) {
      if (message) message.style.display = 'block';
      return;
    }

    if (message) message.style.display = 'none';

    favoriteItems.forEach(item => {
      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.alt = 'Favorite recipe';
      img.classList.add('favorite-image');
      gallerySection.appendChild(img);
    });
  }






/*LIKE BUTTON*/

  likeButtons.forEach(button => {
    const itemId = button.getAttribute('data-id');
    const parent = button.closest('.item');
    const img = parent.querySelector('img');

    if (likedItems[itemId]?.liked) {
      button.classList.add('liked');
      button.textContent = '❤️';
    }

    button.addEventListener('click', () => {
      const isLiked = button.classList.toggle('liked');
      button.textContent = isLiked ? '❤️' : '♡';

      likedItems[itemId] = {
        liked: isLiked,
        imgSrc: img.src
      };

      localStorage.setItem('likedItems', JSON.stringify(likedItems));
      renderFavorites();
    });
  });

  renderFavorites();
});
