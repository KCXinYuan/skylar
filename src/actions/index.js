// The actions javascript file.
// when a user clicks an establishment, it triggers
// these actions and fetches information about the
// establishment and sends that information to the reducers
// (I'm thinking we have a database of all the establishments we want
// so when a user clicks one it can get that establishment's information)

// don't mind all the commented out parts, currently working on getting google maps to work with react

const API_KEY = 'AIzaSyB8QmyS4_dJvk_pgIF6DhekV30UH7PWBW4';

const ROOT_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;

export const FETCH_INFORMATION = 'FETCH_INFORMATION';

export function fetchInformation(placeId) {
	const request = { placeId };
	//console.log(map)
	// var service = new google.maps.places.PlacesService(map)
	// console.log(service)
	// console.log(google.maps.places.PlacesService.getDetails);
	// console.log(request);

	return {
		type: FETCH_INFORMATION,
		payload: request.placeId
	}

}

// function callback(place, status) {
// 	if (status == google.maps.places.PlacesServiceStatus.OK) {
// 		return {
// 			type: FETCH_INFORMATION,
// 			payload: 'TEST'
// 		};
// 	}
// }