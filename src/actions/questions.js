import { RECEIVE_QUESTIONS, ADD_NEW_QUESTION, ANSWER_QUESTION } from './types'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addNewQuestion (question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

export function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}
