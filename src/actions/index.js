// The actions javascript file.
// when a user clicks an establishment, it triggers
// these actions and fetches information about the
// establishment and sends that information to the reducers
// (I'm thinking we have a database of all the establishments we want
// so when a user clicks one it can get that establishment's information)

export const FETCH_INFORMATION = 'FETCH_INFORMATION';

export function fetchInformation(request) {
	return {
		type: FETCH_INFORMATION,
		payload: request
	};

}