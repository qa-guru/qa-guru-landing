'use strict';

// for dev
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// import { jQueryWait } from './modules/jquery.wait.js';
// jQueryWait();

// import { jQueryVisible } from './modules/jquery.visible.js';
// jQueryVisible();

import * as functions from './modules/functions.js';
import { sliders } from './modules/sliders.js';

$(window).on('load', function () {
	//  AFTER LOAD FUNCTIONS
	functions.showProgramm();
	functions.showCourseMore();
	functions.headerSize();
	sliders({
		selector: $('.qa-slider#what_ull_learn'),
		slidesOnScreen: 1,
		interval: 3000,
	});
	sliders({
		selector: $('.qa-slider#slider_vacancies'),
		slidesOnScreen: 2,
		interval: 3000,
	});
	functions.whoTeach();
	functions.howWeTeach();
	functions.courseProgram();
	functions.career();
	functions.faq();
	functions.gcForm();
});

$(window).on('resize', function () {
	clearTimeout(window.resizedFinished);
	window.resizedFinished = setTimeout(function () {
		functions.headerSize();
		// sliders({
		// 	selector: $('.qa-slider#what_ull_learn'),
		// 	slidesOnScreen: 1,
		// 	interval: 3000,
		// });
		// sliders({
		// 	selector: $('.qa-slider#slider_vacancies'),
		// 	slidesOnScreen: 2,
		// 	interval: 3000,
		// });
	}, 100);
});

let timer;
window.addEventListener(
	'scroll',
	function () {
		if (timer !== null) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			// sliders({
			// 	selector: $('.qa-slider#what_ull_learn'),
			// 	slidesOnScreen: 1,
			// 	interval: 3000,
			// });
			// sliders({
			// 	selector: $('.qa-slider#slider_vacancies'),
			// 	slidesOnScreen: 2,
			// 	interval: 3000,
			// });
		}, 100);
	},
	false,
);
