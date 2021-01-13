// Выпадающее меню
const bottomMenuIcon = Array.from(document.querySelectorAll('.menu-bottom__item'));
const bottomMenuIconRotation = Array.from(document.querySelectorAll('.svg'));
const bottomMenuDropDown = Array.from(document.querySelectorAll('.menu-bottom__submenu'));
bottomMenuIcon.forEach(el => el.addEventListener('click', () => {

    bottomMenuIconRotation.forEach(i => {
        if (i.classList.contains("menu-bottom__icon_rotate")) {
            i.classList.remove("menu-bottom__icon_rotate")
        }
        else if (bottomMenuIcon.indexOf(el) == bottomMenuIconRotation.indexOf(i)) {
            i.classList.add('menu-bottom__icon_rotate');
        }
    });
    bottomMenuDropDown.forEach(n => {
        if (n.classList.contains("menu-bottom__submenu_down")) {
            n.classList.remove("menu-bottom__submenu_down");
        }
        else if (bottomMenuIcon.indexOf(el) == bottomMenuDropDown.indexOf(n)) {
            n.classList.add('menu-bottom__submenu_down');
        }
    });
}));


// Поле поиска
const searchInput = document.querySelector('.header__search-input');
const searchForm = document.querySelector('.header__search-block');
const searchRect = document.querySelector('.search__rect');
const searchPath = document.querySelector('.search__path');

searchInput.addEventListener('click', () => {
    searchInput.style.color = "#C283F3";
    searchRect.style.fill = "#C283F3";
    searchPath.style.fill = "#C283F3";
});

searchInput.addEventListener('input', () => {
    if (searchInput.value == '') {
        searchRect.style.fill = "white";
        searchPath.style.fill = "white";
    };
});

// Сслыка войти

const entrance = document.querySelector('.entrance-link');
const entranceIcon = document.querySelector('.entrance__logo');
const entranceIconBorder = document.querySelector('.entrance');
entrance.onmouseover = entrance.onmouseout = (event) => {
    if (event.type == 'mouseover') {
        entranceIcon.classList.add('entrance__logo_fill')
    };

    if (event.type == 'mouseout') {
        entranceIcon.classList.remove('entrance__logo_fill')
    };
};

entrance.addEventListener('mousedown', () => {
    entranceIcon.classList.add('entrance__logo_active')
});


