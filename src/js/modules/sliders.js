export function sliders(settings) {
	if (settings.selector.length > 0) {
		let params = {
			slidesOnScreen: 1,
			interval: false,
			offset: 1580,
			speed: 1000,
		};
		$.extend(params, settings);
		let interval,
			clicked = false,
			play = false,
			count = 1;
		const mainContainer = $('.gc-main-content .lite-page .container-std');

		const sliderContainer = params.selector.find('.slides');
		if (params.slidesOnScreen > 1) {
			sliderContainer.addClass('slides-' + params.slidesOnScreen);
		}
		const sliderSlides = sliderContainer.find('> div');
		const prev = params.selector.find('.controls .prev');
		const next = params.selector.find('.controls .next');
		let firstSlide = sliderSlides.first();
		let lastSlide = sliderSlides.last();
		const counter = params.selector.find('.counter');
		const slideCount = sliderSlides.length;
		let slideWidth = mainContainer.width();
		if (params.slidesOnScreen > 1 && window.innerWidth > params.offset) {
			slideWidth = slideWidth / params.slidesOnScreen;
		}
		let slideContainerWidth = slideCount * slideWidth;
		if (params.arrow === 'right' && window.innerWidth < params.offset) {
			sliderContainer.css({ gap: slideWidth * 0.25 });
		}
		sliderSlides.innerWidth(slideWidth);
		sliderContainer.css({ width: slideContainerWidth });

		$(window).on('resize', function () {
			clearTimeout(window.resFinished);
			window.resFinished = setTimeout(function () {
				slideWidth = mainContainer.width();
				if (
					params.slidesOnScreen > 1 &&
					window.innerWidth > params.offset
				) {
					slideWidth = slideWidth / params.slidesOnScreen;
				}
				sliderSlides.innerWidth(slideWidth);
				slideContainerWidth = slideCount * slideWidth;
				sliderContainer.css({ width: slideContainerWidth });
				clearInterval(interval);
				if (
					params.interval > 0 &&
					params.interval !== false &&
					slideContainerWidth > mainContainer.width() &&
					params.selector.visible() &&
					clicked === false
				) {
					play = true;
					clearInterval(interval);
					interval = setInterval(function () {
						moveRight();
					}, params.interval);
				} else {
					play = false;
					clearInterval(interval);
				}
			}, 100);
		});

		function moveLeft() {
			lastSlide = sliderContainer.find('> div:last-child');
			sliderContainer.stop().animate(
				{
					left: +slideWidth,
				},
				params.speed,
				function () {
					lastSlide.prependTo(sliderContainer);
					sliderContainer.css('left', '');
				},
			);
			count--;
			if (count < 1) {
				count = slideCount;
			}
			if (counter.length > 0) {
				counter.text('0' + count);
			}
		}
		function moveRight() {
			firstSlide = sliderContainer.find('> div:first-child');
			sliderContainer.stop().animate(
				{
					left: -slideWidth,
				},
				params.speed,
				function () {
					firstSlide.appendTo(sliderContainer);
					sliderContainer.css('left', '');
				},
			);
			count++;
			if (count > slideCount) {
				count = 1;
			}
			if (counter.length > 0) {
				counter.text('0' + count);
			}
		}
		if (next.length > 0) {
			next.on('click', function () {
				moveRight();
				clicked = true;
				play = false;
				clearInterval(interval);
			});
		}
		if (prev.length > 0) {
			prev.on('click', function () {
				moveLeft();
				clicked = true;
				play = false;
				clearInterval(interval);
			});
		}

		$(function () {
			if (
				params.interval > 0 &&
				params.interval !== false &&
				slideContainerWidth > mainContainer.width() &&
				params.selector.visible() &&
				clicked === false
			) {
				play = true;
				clearInterval(interval);
				interval = setInterval(function () {
					moveRight();
				}, params.interval);
				params.selector.hover(
					function () {
						play = false;
						clearInterval(interval);
					},
					function () {
						play = true;
						if (clicked === false) {
							interval = setInterval(function () {
								moveRight();
							}, params.interval);
						}
					},
				);
			}
			let timer;
			window.addEventListener(
				'scroll',
				function () {
					if (timer !== null) clearTimeout(timer);
					timer = setTimeout(function () {
						clearInterval(interval);
						if (
							params.interval > 0 &&
							params.interval !== false &&
							slideContainerWidth > mainContainer.width() &&
							params.selector.visible() &&
							clicked === false
						) {
							play = true;
							clearInterval(interval);
							interval = setInterval(function () {
								moveRight();
							}, params.interval);
						} else {
							play = false;
							clearInterval(interval);
						}
						if (window.innerWidth < params.offset) {
							play = true;
							clicked === false;
						}
					}, 100);
				},
				false,
			);
		});
	}
}
