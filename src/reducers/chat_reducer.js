import { FETCH_CHAT } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
	case FETCH_CHAT:
		return action.payload;
	}
	return state;
}