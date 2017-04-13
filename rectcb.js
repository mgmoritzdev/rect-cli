(function() {

	module.exports = function(x, y, callback) {
		try {
			if (x < 0 || y < 0) {
				throw new Error('Invalid dimensions.');
			} else {
				callback(null, {
					perimeter: perimeter(x, y),
					area: area(x, y)
				});
			}
		} catch (error) {
			callback(error, null);
		}
  };

  function perimeter(x, y) {
    return (2 * (x + y));
  }

  function area(x, y) {
    return (x * y);
  }
})();
