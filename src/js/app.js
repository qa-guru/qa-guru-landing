'use strict';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
// import { jQueryWait } from './modules/jquery.wait.js';
// jQueryWait();
import * as functions from './modules/functions.js';
import { sliders } from './modules/sliders.js';

$(window).on('load', function () {
	//  AFTER LOAD FUNCTIONS
	functions.showProgramm();
	sliders({
		selector: $('.qa-slider#what_ull_learn'),
		slidesOnScreen: 1,
	});
	sliders({
		selector: $('.qa-slider#slider_vacancies'),
		slidesOnScreen: 2,
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
		// RESIZE FUNCTIONS
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
			// SCROLL FUNCTIONS
		}, 100);
	},
	false,
);
