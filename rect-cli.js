(function() {
  var argv = require('yargs')
    .usage('Usage: node $0, -w=[num] -h=[num]')
    .demand(['w', 'h'])
    .argv;

  var rectcb = require ('./rectcb');

	rectcb(argv.w, argv.h, function(error, rectangle) {
		if (error) {
			console.log(error.message);
		} else {
			console.log('perimeter = ' + rectangle.perimeter);
			console.log('area = ' + rectangle.area);
		}
  });
})();
