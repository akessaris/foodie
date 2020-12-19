import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getRestaurants } from '../../api/restaurantApi';
import SpinnerComponent from '../shared/spinnerComponent/SpinnerComponent';

const restaurantListComponent = () => {
  const { state: { search } } = useLocation();
  const history = useHistory();

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const { data: { data } } = await getRestaurants(search) || restaurants;
      setRestaurants(data);
    } catch(e) {
      // TODO: pass to logging service or present error in user-friendly modal
      console.log(e);
    }
    setLoading(false);
  },[]);

  const goToRestaurantMenu = (id) => {
    history.push(`/restaurants/${id}`);
  };

  const restaurantList = restaurants.map(({ restaurant_id, restaurant_name, cuisines }) => (
    <tr key={restaurant_id} onClick={() => goToRestaurantMenu(restaurant_id)}>
      <td>{restaurant_name}</td>
      <td>{cuisines}</td>
    </tr>
  ));

  return (
    <div>
      <h2>Restaurants</h2>
      {
        loading 
          ? <SpinnerComponent />
          : <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cuisine</th>
              </tr>
            </thead>

            <tbody>
              { restaurantList }
            </tbody>
          </table>
      }
    </div>
  );
};

export default restaurantListComponent;
