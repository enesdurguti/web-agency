const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContainer = document.querySelector('.menu-container');
const fancyTexts = document.querySelectorAll('#fancy-text'); 

hamburgerMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

fancyTexts.forEach(element => {
    const text = element.innerText.split("");
    element.innerText = '';

    text.forEach(letter => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        element.appendChild(span);
    });
});