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

// Кто будет учить
export function whoTeach() {
	const items = $('.who-teach__container .content').find('.item');
	const numberContainer = $('.who-teach__container .numbers');
	const titleContainer = $('.who-teach__container .titles');

	$.each(items, function (i, e) {
		let name = $(this).find('.name').text();
		let company = $(this).find('.company').text();
		numberContainer.append(`<div>0${i}</div>`);
		titleContainer.append(`<div>${name}<br>${company}</div>`);
	});

	items.eq(0).addClass('active');
	const createdNumbers = $('.who-teach__container .numbers > div');
	const createdNames = $('.who-teach__container .titles > div');

	createdNumbers.eq(0).addClass('active');
	createdNames.eq(0).addClass('active');

	$('.who-teach__container .titles > div').on('click', function () {
		let index = $(this).index();
		createdNumbers.add(createdNames).add(items).removeClass('active');
		items.eq(index).addClass('active');
		createdNumbers.eq(index).addClass('active');
		createdNames.eq(index).addClass('active');
	});
}

// Как мы учим
export function howWeTeach() {
	const items = $('.how-we-teach__container .items').find('.item');
	const itemsLength = $('.how-we-teach__container .items').find(
		'.item',
	).length;
	const titleContainer = $('.how-we-teach__container .top');
	$.each(items, function (i, e) {
		let title = $(this).find('.item-title');
		let titleHtml = title.html();
		titleContainer.append(`<div class="top__item">${titleHtml}</div>`);
		let titleFix = titleHtml.replace('<br>', ' ');
		title.html(titleFix);
	});
	const titleItems = titleContainer.find('.top__item');
	items.eq(0).addClass('active');
	titleItems.eq(0).addClass('active');
	$('.how-we-teach__container .top__item').on('click', function () {
		titleItems.add(items).removeClass('active');
		$(this).addClass('active');
		items.eq($(this).index()).addClass('active');
	});
}

// Программа курса
export function courseProgram() {
	const items = $('.course-program__container').find('.course-program__item');
	$.each(items, function (i, e) {
		$(this).prepend(`<div class='course-program__item__number'>0${i}</div>`);
	});
	items.first().addClass('active');
	$('.course-program__item').on('click', function () {
		items.removeClass('active');
		$(this).addClass('active');
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
