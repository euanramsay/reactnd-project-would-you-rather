import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
// import { showLoading, hideLoading } from 'react-redux-loading';

 
// export const handleInitialData = () => (dispatch) => {
//   dispatch(showLoading());
//   return getInitialData()
//     .then(() => {
//       dispatch(hideLoading());
//     });
// };

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions, authedUser = null }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(authedUser))
      })
  }
}