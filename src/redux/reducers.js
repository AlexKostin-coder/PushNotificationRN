import { combineReducers } from 'redux'
import * as Messages from '../core/messages/messages.reducers';

export default combineReducers({
	...Messages,
});