const configData = require('./config');
const cityCoordinate = configData.cityCoordinate;
const distanceUnit = configData.distanceUnit;

/*
This function is used to caluclate the distance based on latitude and longitude.
*/
function distanceCalculator(destinationLatitude, destinationLongitude) {
    const sourceLatitude = cityCoordinate.latitude;
    const sourceLongitude= cityCoordinate.longitude;
	if ((sourceLatitude == destinationLatitude) && (sourceLongitude == destinationLongitude)) {
		return 0;
	} else {
		const distanceLength = Math.sin((Math.PI * (destinationLatitude - sourceLatitude) / 180)/2) * Math.sin((Math.PI * (destinationLatitude - sourceLatitude) / 180)/2) +
        (Math.cos(Math.PI * sourceLatitude / 180)) * (Math.cos(Math.PI * destinationLatitude / 180)) * Math.sin((Math.PI * (destinationLongitude - sourceLongitude) / 180)/2) *
        Math.sin((Math.PI * (destinationLongitude - sourceLongitude) / 180)/2);
		const angularDistanceRadius = 2 * Math.atan2(Math.sqrt(distanceLength), Math.sqrt(1-distanceLength)); // Converting angular distance in radians
        const distance = ((6371 * 1000) * angularDistanceRadius)/1000;
		if (distanceUnit == "M") { distance = distance / 1.609344 }
		return distance;
	}
}

module.exports = distanceCalculator;