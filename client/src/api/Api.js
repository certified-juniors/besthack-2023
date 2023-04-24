import axios from 'axios';
import { serverURL } from './Config';

class API {
  constructor(serverURL) {
    this.baseURL = serverURL;
  }

  registerUser(params) {
    return axios.post(`${this.baseURL}/register`, params);
  }

  loginUser(params) {
    return axios.post(`${this.baseURL}/login`, params);
  }

  balanceUser(params) {
    return axios.post(`${this.baseURL}/balance`, params);
  }

  getExhcangeServiceAPI(authToken, params) {
    return axios.get(`${this.baseURL}/`, params);
  }

  callRestAPI(exchangeService, commandID, authToken, params) {
    return axios.get();
  }

  setSocketConn(exchangeService, commandID, authToken, params) {
    return axios.post();
  }
}

export default API;
