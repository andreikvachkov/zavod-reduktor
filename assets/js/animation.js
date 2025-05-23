gsap.registerPlugin(ScrollTrigger);



window.addEventListener("load", () => {
    window.scrollTo(0, 0);

    setTimeout(() => {
        const videoWrapper = document.querySelector(".hero__anim-video");
        const video = videoWrapper.querySelector("video");

        gsap.set(video, {
            scale: 1,
            y: 0,
        });

        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        const containerRect = videoWrapper.getBoundingClientRect();
        const containerHeight = containerRect.height;
        const containerWidth = containerRect.width;

        const containerCenterY = containerRect.top + window.scrollY + containerHeight / 2;
        const viewportCenterY = viewportHeight / 2;
        const containerToCenterOffset = viewportCenterY - containerCenterY;

        const scaleX = viewportWidth / containerWidth;
        const scaleY = viewportHeight / containerHeight;
        const finalScale = Math.max(scaleX, scaleY);

        const scaledHeight = containerHeight * finalScale;
        const offsetY = (viewportHeight - scaledHeight) / 2 + containerToCenterOffset;

        gsap.to(video, {
            scale: finalScale,
            y: offsetY,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "+=50%",
                scrub: true,
                pin: videoWrapper,
                anticipatePin: 1,
            }
        });

        ScrollTrigger.refresh();
    }, 100);
});


gsap.utils.toArray(".main__pretitle, .main__title, .main__text").forEach(el => {
    gsap.fromTo(el,
        { y: 70, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 95%",
                toggleActions: "play none none none",
                once: true,
            }
        });
});

gsap.utils.toArray(".about__anim-pretitle, .about__anim-title, .about__anim-text, .about__anim-link, .about__block").forEach(el => {
    gsap.fromTo(el,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true,
            }
        });
});

const items = gsap.utils.toArray(".catalog-category__item");

const imgs = items.map(item => item.querySelector(".catalog-category__item__img"));
const infos = items.map(item => item.querySelector(".catalog-category__item__info"));

gsap.set([...imgs, ...infos], { y: 100, opacity: 0 });

gsap.to(imgs, {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".catalog-category__main",
    start: "top 95%",
    toggleActions: "play none none none"
  }
});

gsap.to(infos, {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".catalog-category__main",
    start: "top 95%",
    toggleActions: "play none none none"
  }
});

gsap.from(".clients__item img", {
    scrollTrigger: {
        trigger: ".clients__item",
        start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});


gsap.from(".about__item", {
    scrollTrigger: {
        trigger: ".about__main",
        start: "top 85%",
        markers: false,
        once: true
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});

gsap.from(".advantages__item", {
    scrollTrigger: {
        trigger: ".advantages__main",
        start: "top 85%",
        markers: false,
        once: true
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});

gsap.fromTo(".advantages__bg",
    { scale: 1 },
    {
        scale: 1.2,
        ease: "power2.out",
        duration: 1.8,
        scrollTrigger: {
            trigger: ".advantages",
            start: "top 100%",
            toggleActions: "play none none none",
            markers: false,
            scrub: false
        }
    }
);

window.addEventListener("load", () => {




    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
        const tl = gsap.timeline();

        tl.from(".about-hero__title", {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.2
        })

            .from(".about-hero__text p", {
                opacity: 0,
                duration: 1.5,
                ease: "power1.out",
                stagger: 0.4
            }, "-=0.3")

            .from(".about-hero__right img", {
                height: 0,
                opacity: 0,
                duration: 1.3,
                ease: "power2.out"
            }, "<")
            .from(".about-hero__btn", {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out"
            }, "-=1.2")

            .from(".about-hero__bottom .about-hero__item", {
                opacity: 0,
                duration: 1.1,
                ease: "power2.out"
            }, "-=1");
    } else {
        const tlMobile = gsap.timeline();

        tlMobile.from(".about-hero__title", {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            // delay: 0.2
        })
            .from(".about-hero__img-mob img", {
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.4")
            .from(".about-hero__text p", {
                opacity: 0,
                duration: 1.3,
                ease: "power1.out",
                stagger: 0.4
            }, "-=0.6")
            .from(".about-hero__btn", {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            }, "-=0.8");

        gsap.utils.toArray(".about-hero__bottom .about-hero__item").forEach(item => {
            gsap.from(item, {
                opacity: 0,
                duration: 1.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    once: true
                }
            });
        });
    }
});



window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    gsap.set(["header", ".hero__text", ".hero__btn", ".hero__video", ".hero__title", ".metal-hero__text", ".metal-hero__btn", ".metal-hero__video", ".metal-hero__title"], {
        opacity: 0,
    });

    tl.to(["header", ".hero__text", ".hero__btn", ".metal-hero__text", ".metal-hero__btn"], {
        duration: 0.6,
        opacity: 1,
        ease: "power1.out"
    });

    tl.to([".hero__video", ".metal-hero__video"], {
        duration: 0.7,
        opacity: 1,
        ease: "power1.out"
    }, "-=0.3");

    tl.to([".hero__title", ".metal-hero__title"], {
        duration: 0.7,
        opacity: 1,
        ease: "power1.out"
    }, "-=0.2");
});



ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
        const items = document.querySelectorAll(".about-stat__graphic__item__content");

        const targetHeights = ["17vh", "27vh", "50vh", "75vh"];

        items.forEach((el, index) => {
            gsap.to(el, {
                height: targetHeights[index],
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-stat",
                    start: "top 30%",
                    toggleActions: "play none none none",
                }
            });
        });
    }
});



const isMobile = window.innerWidth < 768;

gsap.to(".frezer-material__img-one", {
    y: isMobile ? -50 : -300,
    ease: "none",
    scrollTrigger: {
        trigger: ".frezer-material",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".frezer-material__img-two", {
    y: isMobile ? -150 : -200,
    ease: "none",
    scrollTrigger: {
        trigger: ".frezer-material",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".frezer-material__img-three", {
    y: isMobile ? -70 : -250,
    ease: "none",
    scrollTrigger: {
        trigger: ".frezer-material",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".frezer-material__img-four", {
    y: isMobile ? -50 : -240,
    ease: "none",
    scrollTrigger: {
        trigger: ".frezer-material",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".frezer-material__img-five", {
    y: isMobile ? -200 : -320,
    ease: "none",
    scrollTrigger: {
        trigger: ".frezer-material",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});



class ItcAccordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true,
            duration: 350
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            if (!this._config.alwaysOpen) {
                const elOpenItem = this._el.querySelector('.accordion__item_show');
                if (elOpenItem) {
                    elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
                }
            }
            this.toggle(elHeader.parentElement);
        });
    }
    show(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style['display'] = 'block';
        const height = elBody.offsetHeight;
        elBody.style['height'] = 0;
        elBody.style['overflow'] = 'hidden';
        elBody.style['transition'] = `height ${this._config.duration}ms ease`;
        elBody.classList.add('collapsing');
        el.classList.add('accordion__item_slidedown');
        elBody.offsetHeight;
        elBody.style['height'] = `${height}px`;
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            el.classList.remove('accordion__item_slidedown');
            elBody.classList.add('collapse');
            el.classList.add('accordion__item_show');
            elBody.style['display'] = '';
            elBody.style['height'] = '';
            elBody.style['transition'] = '';
            elBody.style['overflow'] = '';
        }, this._config.duration);
    }
    hide(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style['height'] = `${elBody.offsetHeight}px`;
        elBody.offsetHeight;
        elBody.style['display'] = 'block';
        elBody.style['height'] = 0;
        elBody.style['overflow'] = 'hidden';
        elBody.style['transition'] = `height ${this._config.duration}ms ease`;
        elBody.classList.remove('collapse');
        el.classList.remove('accordion__item_show');
        elBody.classList.add('collapsing');
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            elBody.classList.add('collapse');
            elBody.style['display'] = '';
            elBody.style['height'] = '';
            elBody.style['transition'] = '';
            elBody.style['overflow'] = '';
        }, this._config.duration);
    }
    toggle(el) {
        el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
}


document.querySelectorAll('.accordion').forEach((accordion) => {
    new ItcAccordion(accordion, {
        alwaysOpen: false
    });
});



ScrollTrigger.create({
    trigger: ".frezer-advantages",
    start: "top top",
    end: "bottom bottom",
    pin: ".frezer-advantages__left__content",
    pinSpacing: false,
});


const menuItems = document.querySelectorAll('.header__mobile-menu nav > ul > li.menu-item-has-children > a');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function (e) {
        e.preventDefault();

        const parentLi = menuItem.parentElement;
        const subMenu = parentLi.querySelector('.sub-menu');
        const isActive = parentLi.classList.contains('active');

        document.querySelectorAll('.header__mobile-menu nav > ul > li.menu-item-has-children.active').forEach(li => {
            li.classList.remove('active');
            const openSub = li.querySelector('.sub-menu');
            openSub.style.maxHeight = '0';
        });

        if (!isActive) {
            parentLi.classList.add('active');
            const scrollHeight = subMenu.scrollHeight;
            subMenu.style.maxHeight = scrollHeight + 'px';
        }
    });
});


function openMenu() {
    $('.header__mobile-menu').toggleClass('active');
    $('.header__menu-btn').toggleClass('active');
    $('body').toggleClass('no-scroll');

    if ($('.header__menu-btn').hasClass('active')) {
        $('.header__menu-btn').text('закрыть');
    } else {
        $('.header__menu-btn').text('Меню');
    }
}

$('.header__menu-btn').on('click', openMenu);