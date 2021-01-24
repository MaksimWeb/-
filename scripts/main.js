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

// Кастом селект
const element = document.querySelector('#gallery__select');
const choices = new Choices(element, {
    searchEnabled: false,
});

// Слайдер

let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider__item');
const pageNumber = document.querySelector('.slider-pag');
let numberCount = 1;
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
});

pageNumber.textContent = `${numberCount}/${itemsCount}`;

const currentNumber = (numb) => {
    pageNumber.textContent = `${numb}/${itemsCount}`;
};


btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    numberCount--;
    currentNumber(numberCount);
    setPosition();
    checkBtns();
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    numberCount++;
    currentNumber(numberCount);
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

// Галерея

const sliderListItem = [...document.querySelectorAll('.slider__list-item')];
sliderListItem.forEach(el => el.addEventListener('mousedown', () => {
    for (item in sliderListItem) {
        if (sliderListItem[item] === el) {
            sliderListItem[item].classList.add('click');
            sliderListItem[item].style.border = "2px solid #D1A9F0";
        };
    };
}));

sliderListItem.forEach(el => el.addEventListener('mouseup', () => {
    for (item in sliderListItem) {
        if (sliderListItem[item] === el) {
            sliderListItem[item].classList.remove('click');
            sliderListItem[item].style.border = "none";
        };
    };
}));

// Каталог

const itemList = [...document.getElementsByClassName("catalog__list-item")];

const imgList = [...document.getElementsByClassName("catalog__img")];


imgList.forEach(img => {
    img.addEventListener('mousedown', () => {
        img.classList.add('catalog__list-item_mousedown');
    });
});

imgList.forEach(img => {
    img.addEventListener('mouseup', () => {
        img.classList.remove('catalog__list-item_mousedown');
    });
});

itemList.forEach(item => {
    item.addEventListener('mouseup', () => {
        for (let i in itemList) {
            if (itemList[i].classList.contains('catalog__list-item_mouseup')) {
                itemList[i].classList.remove('catalog__list-item_mouseup');
            }
            else if (itemList.indexOf(item) === itemList.indexOf(itemList[i])) {
                itemList[i].classList.add('catalog__list-item_mouseup');
            }
        };
    });
});

// Аккордеон
const accordionIcon = [...document.querySelectorAll('.accordion__svg')];
const accordionTrigger = [...document.querySelectorAll('.accordion-item__trigger')];

accordionTrigger.forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        for (let icon in accordionIcon) {
            if (accordionIcon[icon].classList.contains('accordion__arrow_rotate')) {
                accordionIcon[icon].classList.remove('accordion__arrow_rotate')
            }
            else if (accordionIcon.indexOf(accordionIcon[icon]) === accordionTrigger.indexOf(item)) {
                accordionIcon[icon].classList.add('accordion__arrow_rotate');
            }
        };


        if (parent.classList.contains('accordion-item--active')) {
            parent.classList.remove('accordion-item--active');
        }
        else {
            document.querySelectorAll('.accordion-item').forEach((child) =>
                child.classList.remove('accordion-item--active')
            );
            parent.classList.add('accordion-item--active');
        }
    })
);
