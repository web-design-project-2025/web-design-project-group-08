document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');
  
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || {};
  
    likeButtons.forEach(button => {
      const itemId = button.getAttribute('data-id');

      if (likedItems[itemId]) {
        button.classList.add('liked');
        button.textContent = '❤️';
      }
  
      button.addEventListener('click', () => {
        button.classList.toggle('liked');
        const isLiked = button.classList.contains('liked');
        button.textContent = isLiked ? '❤️' : '♡';
  
        likedItems[itemId] = isLiked;
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
      });
    });
  });
  