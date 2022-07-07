'use strict';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import { jQueryWait } from './modules/jquery.wait.js';
jQueryWait();
import * as functions from './modules/functions.js';

$(window).on('load', function () {
	//  AFTER LOAD FUNCTIONS
	functions.preventClickDefault($('button'));
	functions.showProgramm();
	functions.slider();
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

