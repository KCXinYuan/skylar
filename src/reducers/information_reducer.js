// This is the information reducer.
// it takes the information that was fetched
// by the fetchInformation action and returns
// that information as state that we can use
// to render onto the page

import { FETCH_INFORMATION } from '../actions/index';

export default function(state = {}, action) {
	switch(action.type) {
	case FETCH_INFORMATION:
		return action.payload;
	}
	return state;
}