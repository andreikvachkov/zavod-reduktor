document.querySelectorAll('.region__item').forEach(item => {
    const dot = item.querySelector('.region__item__dot');

    dot.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });

    dot.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });
});


const thumbsSwiper = new Swiper('.product-page__thumbs-slider', {
    spaceBetween: 6,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});

const mainSwiper = new Swiper('.product-page__main-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.product-page__swiper-button-next',
        prevEl: '.product-page__swiper-button-prev',
    },
    thumbs: {
        swiper: thumbsSwiper,
    },

});

const frezer_production__thumbs_swiper = new Swiper('.frezer-production__thumbs-swiper', {
    spaceBetween: 6,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

const frezer_production__main_swiper = new Swiper('.frezer-production__main-swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.frezer-production__swiper-button-next',
        prevEl: '.frezer-production__swiper-button-prev',
    },
    pagination: {
        el: '.frezer-production__swiper__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            const formatNumber = (num) => (num < 10 ? '0' + num : num);
            return `<span>${formatNumber(current)}</span>/${formatNumber(total)}`;
        }
    },
    thumbs: {
        swiper: frezer_production__thumbs_swiper,
    },

});


const frezer_invitation__thumbs_swiper = new Swiper('.frezer-invitation__thumbs-swiper', {
    spaceBetween: 2,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

const frezer_invitation__main_swiper = new Swiper('.frezer-invitation__main-swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.frezer-invitation__swiper-button-next',
        prevEl: '.frezer-invitation__swiper-button-prev',
    },
    pagination: {
        el: '.frezer-invitation__swiper__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            const formatNumber = (num) => (num < 10 ? '0' + num : num);
            return `<span>${formatNumber(current)}</span>/${formatNumber(total)}`;
        }
    },
    thumbs: {
        swiper: frezer_invitation__thumbs_swiper,
    },

});

document.querySelectorAll('.frezer-invitation__swiper-button-next__mob')
    .forEach(btn => btn.addEventListener('click', () => frezer_invitation__main_swiper.slideNext()));

document.querySelectorAll('.frezer-invitation__swiper-button-prev__mob')
    .forEach(btn => btn.addEventListener('click', () => frezer_invitation__main_swiper.slidePrev()));



const about_reliability__swiper = new Swiper('.about-reliability__swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.about-reliability__swiper-button-next',
        prevEl: '.about-reliability__swiper-button-prev',
    },
    pagination: {
        el: '.about-reliability__swiper__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            const formatNumber = (num) => (num < 10 ? '0' + num : num);
            return `<span>${formatNumber(current)}</span>/${formatNumber(total)}`;
        }
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 1500,
    loop: true,
});



const about_history__swiper = new Swiper('.about-history__swiper', {
    spaceBetween: 20,
    slidesPerView: 2,
    navigation: {
        nextEl: '.about-history__swiper-button-next',
        prevEl: '.about-history__swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
});


const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Удалить активные классы
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Добавить активный
        button.classList.add('active');
        document.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
    });
});