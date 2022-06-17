// Отключение действий при нажатии на элемент
export function preventClickDefault(elem) {
	elem.on('click', function (e) {
		e.preventDefault();
	});
}
