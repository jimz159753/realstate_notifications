import { ACTION_TYPES } from '../constants';
import _ from 'lodash';

const {
    ADD_USER,
    ADD_MESSAGE,
    SHOW_MESSAGES,
} = ACTION_TYPES;

const initialState = {
    currentUser: {},
    messages: []
}

const user_information = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return _.assign({}, state, action.payload)
        case ADD_MESSAGE:
            return _.assign({}, state, { messages: state.messages.concat(action.payload) })
        case SHOW_MESSAGES:
            return _.assign({}, state, { messages: action.payload })
        default:
            return state
    }
}

export default user_information;