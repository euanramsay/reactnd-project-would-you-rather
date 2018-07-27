import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions, answerQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const handleInitialData = () => dispatch => {
  dispatch(showLoading())
  return getInitialData().then(({ users, questions, authedUser = null }) => {
    dispatch(receiveUsers(users))
    dispatch(receiveQuestions(questions))
    dispatch(setAuthedUser(authedUser))
    dispatch(hideLoading())
  })
}

export const handleAnswerQuestion = (qid, answer) => (dispatch, getState) => {
  const { authedUser } = getState()
  const questionData = {
    authedUser: authedUser,
    qid,
    answer
  }
  dispatch(showLoading())
  dispatch(answerQuestion(questionData))

  return saveQuestionAnswer(questionData).then(() => dispatch(hideLoading()))
}
