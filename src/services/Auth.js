import axios from "axios";
const API_URL = "http://localhost:8000/";

export default {
  login(credentials) {
    return axios
      .post(API_URL + "users/login", credentials)
      .then((res) => res.data);
  },
  signup(credentials) {
    return axios
      .post(API_URL + "users/signup", credentials)
      .then((res) => res.data);
  },
  transactions(getToken) {
    console.log(JSON.stringify(getToken), "this is the token passes");
    return axios
      .get(API_URL + "transactions", {
        headers: { Authorization: `bearer ${getToken}` },
      })
      .then((res) => res.data);
  },
  createTransaction(transactionData, getToken) {
    return axios.post(API_URL + "transactions", transactionData, {
      headers: { Authorization: `bearer ${getToken}` },
    });
  },
  deleteTransaction(id, getToken) {
    return axios.patch(
      API_URL + `transactions/${id}`,
      {},
      {
        headers: { Authorization: `bearer ${getToken}` },
      }
    );
  },
};
