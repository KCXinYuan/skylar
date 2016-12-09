// This is the root reducer, it takes all the
// reducers and combines them. Eventually
// we will have more than just an information reducer
// when we add more, it will be added to the combineReducers

import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';
import EstablishmentReducer from './establishment_reducer';
import AdvertReducer from './advert_reducer';

const rootReducer = combineReducers({
	authenticated: AuthReducer,
	establishmentInfo: EstablishmentReducer,
	advertInfo: AdvertReducer
});

export default rootReducer;
