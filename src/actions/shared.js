import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData()
    .then(() => {
      dispatch(hideLoading());
    });
};