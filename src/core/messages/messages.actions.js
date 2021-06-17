import { SET_NEW_MESSAGES } from './messages.const';

export const newMessages = (mess) => async (dispatch, getState) => {
	try {

		const { notification } = mess;
		const messages = {
			body: notification.body,
			title: notification.title,
			date: mess.sentTime
		}

		return dispatch({
			type: SET_NEW_MESSAGES,
			payload: { messages },
		});
	} catch (e) {
		console.log({ e });
	}
}