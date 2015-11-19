// http://sampsonblog.com/749/simple-throttle-function
export function throttle (fn, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      fn();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  }
}

export function chunk(n, xs) {
	var ys = [];
	var nChunks = Math.ceil(xs.length / n);
	for (var i = 0; i < nChunks; i += 1) {
		ys.push(xs.slice(i * n, i * n + n));
	}
	return ys;
}
