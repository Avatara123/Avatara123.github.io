function updateChangeBackground() {
	let h = new Date().getHours();
	/* let m = new Date().getMinutes(); */

	let outerDiv = $('.outerBG');

	if (h >= 6 && h < 12) {
		outerDiv.addClass('outerBG_01');
	} else if (h >= 12 && h < 18) {
		outerDiv.addClass('outerBG_02');
	} else if (h >= 18 && h < 24) {
		outerDiv.addClass('outerBG_03');
	} else if (h >= 0 && h < 6) {
		outerDiv.addClass('outerBG_04');
	}
}

let interval = setInterval(updateChangeBackground, 1000);

interval;
