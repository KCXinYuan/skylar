// This is the Advert reducer.
// it takes the information that was fetched
// by the fetchAdvert action and returns
// that information as state that we can use
// to render onto the page

import { FETCH_ADVERT, RESET_ADVERT } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
	case FETCH_ADVERT:
		return action.payload;
	case RESET_ADVERT:
		return action.payload;
	}
	return state;
}