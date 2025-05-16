    document.querySelectorAll('.news-card').forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.news-detail').forEach(sec => sec.style.display = 'none');
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.style.display = 'block';
        window.scrollTo({top: target.offsetTop - 40, behavior: 'smooth'});
      });
    });
   
    document.querySelectorAll('.news-detail').forEach(sec => sec.style.display = 'none');

    document.querySelector('.user-form').addEventListener('submit', function(e){
      e.preventDefault();
      const val = document.getElementById('user-story').value.trim();
      if(val) {
        const p = document.createElement('p');
        p.textContent = val;
        document.querySelector('.user-stories').prepend(p);
        document.getElementById('user-story').value = '';
      }
    });