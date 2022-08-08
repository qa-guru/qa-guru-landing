// Показать программу
export function showProgramm() {
	$('.programm-full-list').append('<div class="close-btn">×</div>');
	$('.show-programm-btn').on('click', function () {
		$('.programm-full-list').addClass('active');
		$('body').addClass('modal-active');
	});
	$('.programm-full-list .close-btn').on('click', function () {
		$('.programm-full-list').removeClass('active');
		$('body').removeClass('modal-active');
	});
}

// Показать карьерное развитие
export function showCourseMore() {
	const button = $('a.course-price__more');
	const content = $('.course-price__more.content');

	$(document).click(function (e) {
		if (
			!button.is(e.target) &&
			!content.is(e.target) &&
			content.has(e.target).length === 0
		) {
			content.removeClass('active');
		}
	});
	button.on('click', function () {
		content.toggleClass('active');
	});
}

export function icons() {
	const svg = $('.start-composition__right');
	const icons = $('.start-composition .icons');
	let svgWigth = svg.width();
	let svgHeight = svg.height();
	let position = svg.position();
	svg.addClass('loaded');
	icons.css({
		width: svgWigth,
		height: svgHeight,
		display: 'flex',
		left: position.left + 'px',
		fontSize: svgWigth / 30 + 'px',
	});
}

// Размер заголовков
export function headerSize(settings) {
	let params = {
		offset: 1199,
	};
	$.extend(params, settings);
	const headers = $('.this-course-for > div div h3');
	headers.css({ minHeight: 'unset' });
	if (window.innerWidth > params.offset) {
		let maxHeight = Math.max.apply(
			null,
			headers
				.map(function () {
					return $(this).height();
				})
				.get(),
		);
		headers.css({ minHeight: maxHeight });
	}
	$(window).on('resize', function () {
		clearTimeout(window.resizedFinished);
		window.resizedFinished = setTimeout(function () {
			if (window.innerWidth > params.offset) {
				let maxHeight = Math.max.apply(
					null,
					headers
						.map(function () {
							return $(this).height();
						})
						.get(),
				);
				headers.css({ minHeight: maxHeight });
			} else {
				headers.css({ minHeight: 'unset' });
			}
		}, 100);
	});
}

// Центр карьеры
export function career() {
	const items = $('.career__content').find('>div');
	const menuItem = $('.career__menu').find('>div');
	items.first().add(menuItem.first()).addClass('active');
	$(menuItem).on('click', function () {
		let index = $(this).index();
		items.add(menuItem).removeClass('active');
		items.eq(index).add(menuItem.eq(index)).addClass('active');
	});
}

// FAQ
export function faq() {
	const items = $('.faq__container').find('>div');
	items.first().addClass('active');
	$(items).on('click', function () {
		items.removeClass('active');
		$(this).addClass('active');
	});
}

// GC FORM
export function gcForm() {
	const title = `<h3>Записаться на вводное занятие 18-го мая 2022</h3><p>После заполнения формы вам придёт письмо с инструкциями для посещения вводного урока и  ссылка на чат школы</p>`;
	$('.form-forms .container').prepend(title);
}
