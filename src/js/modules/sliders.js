export function sliders(settings) {
	if (settings.selector.length > 0) {
		let params = {
			slidesOnScreen: 1,
			interval: false,
			offset: 1580,
			speed: 1000,
		};
		$.extend(params, settings);
		let interval;
		let clicked = false;
		const mainContainer = $('.gc-main-content .lite-page .container-std');
		let count = 1;

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
		if (params.slidesOnScreen > 1 && $(window).width() > params.offset) {
			slideWidth = slideWidth / params.slidesOnScreen;
		}
		sliderSlides.innerWidth(slideWidth);
		let slideContainerWidth = slideCount * slideWidth;
		sliderContainer.css({ width: slideContainerWidth });
		$(window).on('resize', function () {
			clearTimeout(window.resFinished);
			window.resFinished = setTimeout(function () {
				slideWidth = mainContainer.width();
				if (
					params.slidesOnScreen > 1 &&
					$(window).width() > params.offset
				) {
					slideWidth = slideWidth / params.slidesOnScreen;
				}
				sliderSlides.innerWidth(slideWidth);
				slideContainerWidth = slideCount * slideWidth;
				sliderContainer.css({ width: slideContainerWidth });
				if (
					!params.selector.visible() ||
					slideContainerWidth <= mainContainer.width()
				) {
					clearInterval(interval);
				} else if (
					params.interval > 0 &&
					params.interval !== false &&
					slideContainerWidth > mainContainer.width() &&
					params.selector.visible()
				) {
					clearInterval(interval);
					interval = setInterval(moveRight, params.interval);
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
			});
		}
		if (prev.length > 0) {
			prev.on('click', function () {
				moveLeft();
				clicked = true;
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
				clearInterval(interval);
				interval = setInterval(moveRight, params.interval);
				params.selector.hover(
					function () {
						clearInterval(interval);
					},
					function () {
						interval = setInterval(moveRight, params.interval);
					},
				);
			}
			let timer;
			window.addEventListener(
				'scroll',
				function () {
					if (timer !== null) {
						clearTimeout(timer);
					}
					timer = setTimeout(function () {
						if (!params.selector.visible() || clicked === true) {
							clearInterval(interval);
						} else if (
							params.interval > 0 &&
							params.interval !== false &&
							slideContainerWidth > mainContainer.width() &&
							params.selector.visible() &&
							clicked === false
						) {
							clearInterval(interval);
							interval = setInterval(moveRight, params.interval);
						}
					}, 100);
				},
				false,
			);
		});
	}
}
