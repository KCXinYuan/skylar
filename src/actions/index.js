// The actions javascript file.
// when a user clicks an establishment, it triggers
// these actions and fetches information about the
// establishment and sends that information to the reducers
// (I'm thinking we have a database of all the establishments we want
// so when a user clicks one it can get that establishment's information)

export const FETCH_ESTABLISHMENT = 'FETCH_ESTABLISHMENT';
export const RESET_ESTABLISHMENT = 'RESET_ESTABLISHMENT';
export const FETCH_ADVERT = 'FETCH_ADVERT';
export const RESET_ADVERT = 'RESET_ADVERT';

export const FETCH_CHAT = 'FETCH_CHAT';

export const CHANGE_AUTH = 'CHANGE_AUTH';


// eventually the fetch information will use http requests to get data.
export function fetchInformation(request, type) {
	return {
		type: type,
		payload: request
	};

}

export function resetInformation(type) {
	return {
		type: type,
		payload: {}
	}
}

export function fetchChat() {
	// use a http get request to obtain data of all the messages sent.
	return {
		type: FETCH_CHAT,
		payload: { Hello: "Test", Hello2: "Test2" }
	}
}

export function authenticate(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	}
}