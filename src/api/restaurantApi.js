import { handleResponse, handleError, convertObjToUrl } from "./apiUtils";
import axios from './axios';
const RESTAURANT_API_KEY = process.env.RESTAURANT_API_KEY;

export async function getRestaurants(searchObj) {
  const urlParams = convertObjToUrl(searchObj);
  const headers = {
    'X-API-KEY': RESTAURANT_API_KEY
  }
  return axios.get(`/restaurants/${urlParams}`, { headers })
    .then(handleResponse)
    .catch(handleError);
}