import { RECEIVE_USERS, ANSWER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION: {
      const { question, authedUser, option } = action.answerData;
      const user = state[authedUser];
      return {
        ...state,
        [authedUser]: {
          option
        }
      };
    }
    default:
      return state;
  }
}
