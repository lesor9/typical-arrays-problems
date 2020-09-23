exports.min = function min (array) {
	if (min.arguments.length == 0) return 0;
	if (array[0] == undefined) return 0;

	let minEl = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < minEl) {
			minEl = array[i];
		}
	}
	return minEl;
}


exports.max = function max (array) {
    if (max.arguments.length == 0) return 0;
	if (array[0] == undefined) return 0;

	let maxEl = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > maxEl) {
			maxEl = array[i];
		}
	}
	return maxEl;
}

exports.avg = function avg (array) {
    if (avg.arguments.length == 0) return 0;
	if (array[0] == undefined) return 0;

	let avgEl = 0;
	for (let i = 0; i < array.length; i++) {
		avgEl += array[i];
	}
	avgEl = avgEl / array.length;
	return avgEl;
}
