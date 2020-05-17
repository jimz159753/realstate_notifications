import { ACTION_TYPES, API_REQUEST } from './constants';
import _ from 'lodash';
import axios from '../config';

const {
    ADD_USER,
    ADD_MESSAGE,
    SHOW_MESSAGES
} = ACTION_TYPES;

const {
    USERS_ADD,
    MESSAGES_ADD,
    MESSAGES_SHOW,
    MESSAGES_ALL
} = API_REQUEST;

export const addUser = ({ email, password }) => async (dispatch, getState) => {
    // const authToken = getState().user_information.authToken || localStorage.getItem('authToken');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    const request = await axios.post(`${USERS_ADD}`, {
        email,
        password
    })
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const addMessage = ({ title, description }) => async (dispatch, getState) => {
    // const authToken = getState().user_information.authToken || localStorage.getItem('authToken');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    const request = await axios.post(`${MESSAGES_ADD}`, {
        title,
        description
    })
        .then(res => res.data)
        .catch(err => console.log(err))

    return dispatch({
        type: ADD_MESSAGE,
        payload: request.message
    })
}

export const showMessages = () => async (dispatch, getState) => {
    // const authToken = getState().user_information.authToken || localStorage.getItem('authToken');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    const request = await axios.get(`${MESSAGES_SHOW}`)
        .then(res => res.data)
        .catch(err => console.log(err))

    return dispatch({
        type: SHOW_MESSAGES,
        payload: request
    })
}

export const removeMessage = (id) => async (dispatch, getState) => {
    // const authToken = getState().user_information.authToken || localStorage.getItem('authToken');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    const request = await axios.delete(`${MESSAGES_ALL}${id}`)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const updateMessage = ({ id, title, description }) => async (dispatch, getState) => {
    // const authToken = getState().user_information.authToken || localStorage.getItem('authToken');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    const request = await axios.patch(`${MESSAGES_ALL}${id}`, {
        title,
        description
    })
        .then(res => res.data)
        .catch(err => console.log(err))
}