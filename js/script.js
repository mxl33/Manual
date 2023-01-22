function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//========ibg==========

//========menu==========

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    });
}

const gotoLinks = document.querySelectorAll('.goto-link[data-goto]');
if (gotoLinks.length > 0) {
    gotoLinks.forEach(gotoLink => {
        gotoLink.addEventListener("click", ongotoLinkClick);
    });

    function ongotoLinkClick(e) {
        const gotoLink = e.target;
        if (gotoLink.dataset.goto && document.querySelector(gotoLink.dataset.goto)) {
            const gotoBlock = document.querySelector(gotoLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('menu__icon_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('menu__icon_active');
                menuBody.classList.remove('menu__body_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//========menu==========

//========slider==========

$(document).ready(function () {
    $('.comments-slider').slick({
        arrows: false,
        slidesToShow: 1.67,
        easing: 'ease',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.comments-slider__button_prev').click(function (event) {
        $('.comments-slider').slick('slickPrev');
    });

    $('.comments-slider__button_next').click(function (event) {
        $('.comments-slider').slick('slickNext');
    });

});

$(document).ready(function () {
    $('.guided-slider').slick({
        arrows: false,
        easing: 'ease',
        slidesToShow: 4.5,
        infinite: false,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

//========slider==========

//========popup==========

const popupTrigger = document.querySelectorAll('[data-popup]'),
    popup = document.querySelector('.popup'),
    popupCloseBtn = document.querySelector('[data-close]');

popupTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.add('popup_show');
        popup.classList.remove('popup_hide');
        document.body.style.overflow = 'hidden';
    });
});

function closePopup() {
    popup.classList.add('popup_hide');
    popup.classList.remove('popup_show');
    document.body.style.overflow = '';
}

popupCloseBtn.addEventListener('click', closePopup);

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && popup.classList.contains('popup_show')) {
        closePopup();
    }
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

//========popup==========