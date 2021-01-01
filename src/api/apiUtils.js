const REACT_APP_RESTAURANT_API_KEY = process.env.REACT_APP_RESTAURANT_API_KEY;

export async function handleResponse(response) {
  if (response.ok || response.status === 200) return response;
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// TODO: implement logging service
export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}

export function convertObjToUrl(obj) {
  let params = '';
  for (const key in obj) {
    params += `${key}/${obj[key]}`;
  }
  return params;
}

export function getApiHeaders (endpoint) {
  let apiKey;
  switch(endpoint) {
    case 'restaurants':
      apiKey = REACT_APP_RESTAURANT_API_KEY;
      break;
  }
  return { 'X-API-KEY': apiKey };
}
