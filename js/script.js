import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide_wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl();
