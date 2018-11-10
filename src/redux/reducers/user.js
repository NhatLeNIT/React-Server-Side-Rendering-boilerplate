import { FETCH_USERS } from '../constants/actionType';

const initialState = {
    list: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_USERS: {
            const cloneState = { ...state };
            // Object.assign(cloneState, state);
            cloneState.list = payload.data;
            return cloneState;
        }


        default:
            return state
    }
}
