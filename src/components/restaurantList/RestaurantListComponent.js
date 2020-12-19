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

  const goToRestaurantMenu = ({ id, name }) => {
    history.push(`/restaurants/${id}`, { name, id });
  };

  const restaurantList = restaurants.map(({ restaurant_id: id, restaurant_name: name, cuisines }) => (
    <tr key={id} onClick={() => goToRestaurantMenu({ name, id })}>
      <td>{name}</td>
      <td>{cuisines.join(', ')}</td>
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
