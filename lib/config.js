const path = require('path');

const appConfig = {
	filePath : path.resolve(__dirname + '/customer.txt'),
	cityCoordinate : {
		latitude  : 53.339428,
		longitude : -6.257664
	},
	distanceUnit : "KM",
    distanceLimit : 100,
};

module.exports = appConfig;