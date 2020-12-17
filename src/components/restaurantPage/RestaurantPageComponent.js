import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function RestaurantPageComponent() {
  const { url } = useRouteMatch();
  const splitURL = url.split('/');
  const restaurantId = splitURL[splitURL.length -1];

  return (
    <div>RestaurantPageComponent: {restaurantId}</div>
  );
}