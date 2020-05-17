import axios from 'axios';

const server = `http://167.99.150.251:6000/api`;
const instance = axios.create({
    baseURL: server
});

export { instance as default };