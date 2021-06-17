import { SET_NEW_MESSAGES, defaultMessages } from "./messages.const";

export const messages = (state = defaultMessages, action) => {
  switch (action.type) {
    case SET_NEW_MESSAGES:
      return {
        ...state,
      }
    default:
      return state;
  }
}