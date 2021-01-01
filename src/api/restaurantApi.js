import { handleResponse, handleError, convertObjToUrl, getApiHeaders } from "./apiUtils";
import { restaurantEndpoint } from './axios';

export async function getRestaurants(searchObj) {
  const urlParams = convertObjToUrl(searchObj);
  const headers = getApiHeaders('restaurants');
  return restaurantEndpoint.get(`/restaurants/${urlParams}`, { headers })
    .then(handleResponse)
    .catch(handleError);
}

export async function getMenuItems(restaurantId) {
  const headers = getApiHeaders('restaurants');
  return restaurantEndpoint.get(`/restaurant/${restaurantId}/menuItems`, { headers })
    .then(handleResponse)
    .catch(handleError);
}
