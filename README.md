# YARGS Example

This is an example of yargs library to create a simple command line tool to calculate the perimeter and the area of a rectangle.

Find more about yargs on [github](https://github.com/yargs/yargs).
Original Example from [Coursera](https://www.coursera.org) [Server-side Development with NodeJS](https://www.coursera.org/learn/server-side-development)


## Usage
```shell
node rect-cli.js -h 10 -w 20
```

## Code details

The simple and tiny code creates a command line parser with the validations and parameter parsing.

```javascript
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
```
