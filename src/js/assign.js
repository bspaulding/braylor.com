let assign = Object.assign || function assign(x, ...xs) {
	for (var i = 0; i < xs.length; i += 1) {
		for (var k in xs[i]) {
			if (xs[i].hasOwnProperty(k)) {
				x[k] = xs[i][k];
			}
		}
	}

	return x;
}

export default assign;
