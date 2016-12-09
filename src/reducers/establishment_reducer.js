// This is the establishment reducer.
// it takes the information that was fetched
// by the fetchEstablishment action and returns
// that information as state that we can use
// to render onto the page

import { FETCH_ESTABLISHMENT, RESET_ESTABLISHMENT } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
	case FETCH_ESTABLISHMENT:
		return action.payload;
	case RESET_ESTABLISHMENT:
		return action.payload;
	}
	return state;
}