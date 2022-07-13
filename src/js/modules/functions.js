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

// Кто будет учить
export function whoTeach() {
	const items = $('.who-teach__container .content').find('.item');
	const numberContainer = $('.who-teach__container .numbers');
	const titleContainer = $('.who-teach__container .titles');

	$.each(items, function (i, e) {
		let name = $(this).find('.name').text();
		numberContainer.append(`<div>0${i}</div>`);
		titleContainer.append(`<div>${name}</div>`);
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
	const titleContainer = $('.how-we-teach__container .top');
	$.each(items, function (i, e) {
		let title = $(this).find('.item-title').text();
		titleContainer.append(`<div class="top__item">${title}</div>`);
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
