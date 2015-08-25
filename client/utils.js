window.randomNumber = function (from, to) {
	return from + Math.round(Math.random() * (to - from));
}

window.randomColor = function () {
	// rgb(r, g, b)
	var r = window.randomNumber(0, 255);
	var g = window.randomNumber(0, 255);
	var b = window.randomNumber(0, 255);
	return 'rgb(' + r + ', '+ g + ', ' + b + ')';
}
