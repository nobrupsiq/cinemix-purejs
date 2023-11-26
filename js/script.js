import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide_wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl();

// Scroll para o topo

function scrollTop() {
    if (window.scrollY >= 760) {
        document.querySelector('.moveTop').classList.add('ativo');
    }
    if (window.scrollY < 760) {
        document.querySelector('.moveTop').classList.remove('ativo');
    }
}

window.addEventListener('scroll', scrollTop);

function goTop() {
    window.scrollTo(0, 0);
}

const moveTop = document.querySelector('.moveTop img');
moveTop.addEventListener('click', goTop);
