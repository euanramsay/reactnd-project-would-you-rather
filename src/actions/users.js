import { RECEIVE_USERS, ANSWER_QUESTION } from './types'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function answerQuestion(answerData) {
  return {
    type: ANSWER_QUESTION,
    answerData
  }
}
