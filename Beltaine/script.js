function updateChangeBackground() {
	let h = new Date().getHours();
	/* let m = new Date().getMinutes(); */

	let outerDiv = $('body');
	
	if (h >= 0 && h < 4) {
		outerDiv.addClass('outerBG_01');
	}
	else if (h >= 4 && h < 8) {
		outerDiv.addClass('outerBG_02');
	}
	else if (h >= 8 && h < 12) {
		outerDiv.addClass('outerBG_03');
	}
	else if (h >= 12 && h < 16) {
		outerDiv.addClass('outerBG_04');
	}
	else if (h >= 16 && h < 20) {
		outerDiv.addClass('outerBG_05');
	}
	else if (h >= 20 && h < 0) {
		outerDiv.addClass('outerBG_06');
	}
}

let interval = setInterval(updateChangeBackground, 1000);

interval;