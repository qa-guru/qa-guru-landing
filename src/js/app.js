'use strict';

// for dev
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// import { jQueryWait } from './modules/jquery.wait.js';
// jQueryWait();

import { jQueryVisible } from './modules/jquery.visible.js';
jQueryVisible();

import * as functions from './modules/functions.js';
import { sliders } from './modules/sliders.js';
import { itemsChange } from './modules/items-change.js';

const sliderChangeDelay = 5000;
const sliderChangeSpeed = 1000;

$(window).on('load', function () {
	functions.showProgramm();
	functions.showCourseMore();
	functions.headerSize();
	sliders({
		selector: $('.qa-slider#what_ull_learn'),
		slidesOnScreen: 1,
		interval: sliderChangeDelay,
		speed: sliderChangeSpeed,
	});
	sliders({
		selector: $('.qa-slider#slider_vacancies'),
		slidesOnScreen: 2,
		interval: sliderChangeDelay,
		speed: sliderChangeSpeed,
		offset: 1200,
	});
	itemsChange({
		selector: $('.who-teach__container'),
		interval: sliderChangeDelay,
		speed: sliderChangeSpeed,
		type: 1,
	});
	itemsChange({
		selector: $('.how-we-teach__container'),
		interval: sliderChangeDelay,
		speed: sliderChangeSpeed,
		type: 2,
	});
	itemsChange({
		selector: $('.course-program__container'),
		interval: sliderChangeDelay,
		speed: sliderChangeSpeed,
		type: 3,
	});
	functions.career();
	functions.faq();
	functions.gcForm();
});
