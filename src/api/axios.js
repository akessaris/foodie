import axios from 'axios';

export const restaurantEndpoint = axios.create({
  baseURL: 'https://api.documenu.com/v2'
});

export const recipeEndpoint = axios.create({
  baseURL: 'https://api.edamam.com'
});