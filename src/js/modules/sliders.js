export function sliders(settings) {
	if (settings.selector.length > 0) {
		let params = {
			selector: '',
			slidesOnScreen: 1,
		};
		$.extend(params, settings);

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
		let slideWidth = $('.gc-main-content .lite-page .container-std').width();
		if (params.slidesOnScreen > 1) {
			slideWidth = slideWidth / params.slidesOnScreen;
		}
		sliderSlides.innerWidth(slideWidth);
		const slideContainerWidth = slideCount * slideWidth;
		let count = 1;

		sliderContainer.css({
			width: slideContainerWidth,
			'margin-left': 0,
			display: 'flex',
		});

		function moveLeft() {
			lastSlide = sliderContainer.find('> div:last-child');
			sliderContainer.stop().animate(
				{
					left: +slideWidth,
				},
				700,
				function () {
					lastSlide.prependTo(sliderContainer);
					sliderContainer.css('left', '');
				},
			);
		}
		function moveRight() {
			firstSlide = sliderContainer.find('> div:first-child');
			sliderContainer.stop().animate(
				{
					left: -slideWidth,
				},
				700,
				function () {
					firstSlide.appendTo(sliderContainer);
					sliderContainer.css('left', '');
				},
			);
		}
		if (next.length > 0) {
			next.on('click', function () {
				moveRight();
				count++;
				if (count > slideCount) {
					count = 1;
				}
				if (counter.length > 0) {
					counter.text('0' + count);
				}
			});
		}
		if (prev.length > 0) {
			prev.on('click', function () {
				moveLeft();
				count--;
				if (count < 1) {
					count = slideCount;
				}
				if (counter.length > 0) {
					counter.text('0' + count);
				}
			});
		}
	}
}
