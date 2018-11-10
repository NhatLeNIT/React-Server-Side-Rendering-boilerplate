import axios from 'axios';
import { FETCH_USERS } from '../constants/actionType';

export const fetchUsersRequest = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

    dispatch(fetchUsers(res));
}

const fetchUsers = (payload) => ({ type: FETCH_USERS, payload })