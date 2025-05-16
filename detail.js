document.addEventListener("DOMContentLoaded", function () {
    const dessert = JSON.parse(localStorage.getItem("selectedDessert"));
    if (dessert) {

        const img = document.querySelector(".food-image");
        if (img) img.src = dessert.image;

        const h2 = document.querySelector(".intro-section h2");
        if (h2) h2.textContent = dessert.name + " Introduction";

        const p = document.querySelector(".intro-section p");
        if (p) p.innerHTML = dessert.description;

    }
});
document.addEventListener("DOMContentLoaded", function () {
    // ...existing code for dessert...

    // 评论功能
    let comments = [];
    const commentsList = document.getElementById('comments-list');
    const commentBox = document.getElementById('comment-box');
    const submitBtn = document.getElementById('submit-button');
    const stars = document.querySelectorAll('.stars i');
    let currentRating = 0;

    // 加载评论
    function loadComments() {
        if (localStorage.getItem("comments")) {
            comments = JSON.parse(localStorage.getItem("comments"));
            renderComments();
        } else {
            fetch('detail.json')
                .then(res => res.json())
                .then(data => {
                    comments = data;
                    localStorage.setItem("comments", JSON.stringify(comments));
                    renderComments();
                });
        }
    }

    // 渲染评论
    function renderComments() {
        commentsList.innerHTML = "";
        comments.forEach(c => {
            const div = document.createElement('div');
            div.className = 'commenters';
            let starsHtml = '';
            for (let i = 0; i < 5; i++) {
                starsHtml += `<i class="fa-solid fa-star${i < c.rating ? '' : ' no-star'}"></i>`;
            }
            div.innerHTML = `
                ${starsHtml}
                <p>${c.username}<br>“${c.comment}”</p>
            `;
            commentsList.appendChild(div);
        });
    }

    // 评分交互
    stars.forEach((star, idx) => {
        star.addEventListener('click', () => {
            currentRating = idx + 1;
            updateStarUI();
        });
    });
    function updateStarUI() {
        stars.forEach((star, idx) => {
            if (idx < currentRating) {
                star.classList.add('Active');
            } else {
                star.classList.remove('Active');
            }
        });
    }

  
    submitBtn.addEventListener('click', function () {
        const commentText = commentBox.value.trim();
        if (!commentText || currentRating === 0) {
            alert('Please enter a comment and select a rating.');
            return;
        }
        const username = "@" + (localStorage.getItem("username") || "guest" + Math.floor(Math.random() * 10000));
        const newComment = {
            username,
            rating: currentRating,
            comment: commentText
        };
        comments.unshift(newComment);
        localStorage.setItem("comments", JSON.stringify(comments));
        renderComments();
        commentBox.value = "";
        currentRating = 0;
        updateStarUI();
    });

    loadComments();
});

const params = new URLSearchParams(window.location.search);
const item = params.get('item');
if (item === 'sakura-blossom-cake') {
  // 渲染 Sakura Mousse Recipe 的内容
  // 你可以用 innerHTML 或动态生成 DOM
}

// 渲染每个蛋糕时
itemElement.addEventListener('click', function() {
  window.location.href = 'detail.html';
});

const dessert = JSON.parse(localStorage.getItem("selectedDessert"));
if (dessert) {
    // 渲染图片、标题、描述
}