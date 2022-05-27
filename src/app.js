const iconButton = document.getElementById('icon')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

iconButton.addEventListener('click', toggleButton)