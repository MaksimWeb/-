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