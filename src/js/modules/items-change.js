// Смена слайдов
export function itemsChange(settings) {
	if (settings.selector.length > 0) {
		let params = {
			interval: 3000,
			speed: 1000,
			type: 1,
		};
		$.extend(params, settings);
		let numbers,
			titles,
			items,
			interval,
			play = false,
			clicked = false,
			count = 0,
			createdNumbers,
			activeTitles,
			titlesInit;

		if (params.type === 1) {
			numbers = params.selector.find('.numbers');
			titles = params.selector.find('.titles');
			items = params.selector.find('.item');
			$.each(items, function (i) {
				const name = $(this).find('.name').text();
				const company = $(this).find('.company').text();
				numbers.append(`<div>0${i + 1}</div>`);
				titles.append(`<div>${name}<br>${company}</div>`);
			});
			createdNumbers = params.selector.find('.numbers > div');
			activeTitles = params.selector.find('.titles > div');
		}
		if (params.type === 2) {
			titlesInit = params.selector.find('.top');
			items = params.selector.find('.item');
			$.each(items, function () {
				const title = $(this).find('.item-title');
				const titleHtml = title.html();
				titlesInit.append(`<div class="top__item">${titleHtml}</div>`);
				const titleFix = titleHtml.replace('<br>', ' ');
				title.html(titleFix);
			});
			activeTitles = $('.how-we-teach__container .top__item');
		}
		if (params.type === 3) {
			numbers = params.selector.find('.numbers');
			titles = params.selector.find('.titles');
			items = params.selector.find('.course-program__item');
			$.each(items, function (i) {
				$(this).prepend(
					`<div class='course-program__item__number'>0${i + 1}</div>`,
				);
			});
			activeTitles = items;
		}

		if (items) items.eq(0).addClass('active');
		if (createdNumbers) createdNumbers.eq(0).addClass('active');
		if (activeTitles) activeTitles.eq(0).addClass('active');

		activeTitles.on('click', function () {
			count = $(this).index();
			change(false);
			play = false;
			clicked = true;
		});

		function change(auto) {
			if (auto !== false && play === true) count++;
			if (count >= items.length) count = 0;
			if (createdNumbers)
				createdNumbers.removeClass('active'),
					createdNumbers.eq(count).addClass('active');
			if (activeTitles)
				activeTitles.removeClass('active'),
					activeTitles.eq(count).addClass('active');
			if (items)
				items.removeClass('active'), items.eq(count).addClass('active');
		}

		$(function () {
			clearInterval(interval);
			if (
				params.interval > 0 &&
				params.interval !== false &&
				params.selector.visible() &&
				clicked === false
			) {
				play = true;
				interval = setInterval(function () {
					change();
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
								change();
							}, params.interval);
						}
					},
				);
			}
		});
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
						params.selector.visible() &&
						clicked === false
					) {
						play = true;
						clearInterval(interval);
						interval = setInterval(function () {
							change();
						}, params.interval);
					} else {
						play = false;
						clearInterval(interval);
					}
				}, 100);
			},
			false,
		);
	}
}
