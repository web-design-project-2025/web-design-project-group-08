document.querySelector('.toggle-submenu').addEventListener('click', function () {
    const secondNav = document.querySelector('.second-nav');
    if (secondNav.style.display === 'none' || secondNav.style.display === '') {
        secondNav.style.display = 'flex';
    } else {
        secondNav.style.display = 'none';
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}