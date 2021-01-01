import { handleResponse, handleError } from "./apiUtils";
import { recipeEndpoint } from './axios';

const REACT_APP_RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
const REACT_APP_RECIPE_APP_ID = process.env.REACT_APP_RECIPE_APP_ID;

export async function getRecipeForItem(item) {
  return recipeEndpoint.get(`/search?q=${item}&app_id=${REACT_APP_RECIPE_APP_ID}&app_key=${REACT_APP_RECIPE_API_KEY}`)
    .then(handleResponse)
    .catch(handleError);
}