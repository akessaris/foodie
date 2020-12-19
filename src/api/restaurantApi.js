import { handleResponse, handleError, convertObjToUrl } from "./apiUtils";
import axios from './axios';
const REACT_APP_RESTAURANT_API_KEY = process.env.REACT_APP_RESTAURANT_API_KEY;

const getApiHeaders = () => {
  return { 'X-API-KEY': REACT_APP_RESTAURANT_API_KEY };
}

export async function getRestaurants(searchObj) {
  const urlParams = convertObjToUrl(searchObj);
  const headers = getApiHeaders();
  return axios.get(`/restaurants/${urlParams}`, { headers })
    .then(handleResponse)
    .catch(handleError);
}

export async function getMenuItems(restaurantId) {
  const headers = getApiHeaders();
  return axios.get(`/restaurant/${restaurantId}/menuItems`, { headers })
    .then(handleResponse)
    .catch(handleError);
}