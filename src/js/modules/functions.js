// Отключение действий при нажатии на элемент
export function preventClickDefault(elem) {
	elem.on('click', function (e) {
		e.preventDefault();
	});
}

// Показать программу
export function showProgramm() {
	$('.show-programm-btn').on('click', function () {
		$('.programm-full-list').addClass('active');
	});
}

// Слайдер
export function slider() {
	let slideCount = $('.qa-slider__slides > div').length;
	let slideWidth = $('.gc-main-content .lite-page .container-std').width();
	$('.qa-slider__slides > div').innerWidth(slideWidth);
	let slideContainerWidth = slideCount * slideWidth;
	let count = 1;

	$('.qa-slider__slides').css({
		width: slideContainerWidth,
		'margin-left': 0,
		display: 'flex',
	});
	$('qa-slider__slides > div:last-child').prependTo($('.qa-slider__slides'));

	function moveLeft() {
		$('.qa-slider__slides')
			.stop()
			.animate(
				{
					left: +slideWidth,
				},
				700,
				function () {
					$('.qa-slider__slides > div:last-child').prependTo(
						$('.qa-slider__slides'),
					);
					$('.qa-slider__slides').css('left', '');
				},
			);
	}
	function moveRight() {
		$('.qa-slider__slides')
			.stop()
			.animate(
				{
					left: -slideWidth,
				},
				700,
				function () {
					$('.qa-slider__slides > div:first-child').appendTo(
						$('.qa-slider__slides'),
					);
					$('.qa-slider__slides').css('left', '');
				},
			);
	}
	$('.qa-slider .next').on('click', function () {
		moveRight();
		count++;
		if (count > slideCount) {
			count = 1;
		}
		$('.qa-slider__counter').text('0' + count);
	});

	$('.qa-slider .prev').on('click', function () {
		moveLeft();
		count--;
		if (count < 1) {
			count = slideCount;
		}
		$('.qa-slider__counter').text('0' + count);
	});
}
