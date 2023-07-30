const burger = document.querySelector(".header-wrapper__burger");
const menuList = document.querySelector(".header-wrapper__list");
const body = document.querySelector("body");
burger.addEventListener("click", function() {
    this.classList.toggle("active");
    menuList.classList.toggle("active");
    body.classList.toggle("lock");
});

const numberSlide = document.querySelectorAll(".speakers-wrapper__item").length;
new Swiper(".speakers-wrapper__items", {
    navigation: {
        nextEl: ".speakers-wrapper__next",
        prevEl: ".speakers-wrapper__prev",
    },
    spaceBetween: 30,
    initialSlide: numberSlide - 1,
    breakpoints: {
        320: {},
        576: {
            slidesPerView: 1,
            initialSlide: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 1.5,
        },
        1199: {},
        1320: {
            slidesPerView: 2
        },
        1600: {
            slidesPerView: 2.3
        },
        1920: {
            slidesPerView: 3,
        }
    }
});