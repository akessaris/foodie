import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getRestaurants } from '../../api/restaurantApi';

const restaurantListComponent = () => {
  const { state: { search } } = useLocation();
  const history = useHistory();

  const [restaurants, setRestaurants] = useState([]);

  useEffect(async () => {
    const { data: { data } } = await getRestaurants(search) || restaurants;
    setRestaurants(data);
  },[]);

  const goToRestaurantMenu = (id) => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <div>
      <h2>Restaurants</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
          </tr>
        </thead>

        <tbody>
          {
            restaurants.map(({ restaurant_id, restaurant_name, cuisines }) => (
              <tr key={restaurant_id} onClick={() => goToRestaurantMenu(restaurant_id)}>
                <td>{restaurant_name}</td>
                <td>{cuisines}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default restaurantListComponent;
