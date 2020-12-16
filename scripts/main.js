const bottomMenuIcon = Array.from(document.querySelectorAll('.menu-bottom__item'));
const bottomMenuIconRotation = Array.from(document.querySelectorAll('.svg'));
const bottomMenuDropDown = Array.from(document.querySelectorAll('.menu-bottom__submenu'));
bottomMenuIcon.forEach(el => el.addEventListener('click', () => {
    bottomMenuIconRotation.forEach(i => {
        if (bottomMenuIcon.indexOf(el) == bottomMenuIconRotation.indexOf(i)) {
            i.classList.toggle('menu-bottom__icon_rotate');
        }
    });
    bottomMenuDropDown.forEach(n => {
        if (bottomMenuIcon.indexOf(el) == bottomMenuDropDown.indexOf(n))
            n.classList.toggle('menu-bottom__submenu_down')
    });
}))

const searchInput = document.querySelector('.header__search-input');
const searchRect = document.querySelector('.search__rect');
const searchPath = document.querySelector('.search__path');

searchInput.addEventListener('click', () => {
    searchInput.style.color = "#C283F3";
    searchRect.style.fill = "#C283F3";
    searchPath.style.fill = "#C283F3";
    console.log('s')
});

searchInput.addEventListener('input', () => {
    if (searchInput.value == '') {
        searchRect.style.fill = "white";
        searchPath.style.fill = "white";
    }
})