import axios from "axios";

const BASE_URL = "/food";

export const addFood = (data) =>
  axios.post(`${BASE_URL}/add`, data);

export const getFood = () =>
  axios.get(`${BASE_URL}/all`);