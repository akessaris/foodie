import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import mockRestaurantData from '../../api/MOCK_DATA.json';

const restaurantListComponent = (props) => {
  // TODO: replace with API call or store
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    return [...mockRestaurantData];
  };

  useEffect(() => {
    setRestaurants(getRestaurants());
  },[]);

  const goToRestaurantMenu = (id) => {
    props.history.push(`/restaurants/${id}`);
  };

  return (
    <div>
      <h2>Restaurants</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Cuisine</th>
          </tr>
        </thead>

        <tbody>
          {
            restaurants.map(({ id, name, rating, cusine }) => (
              <tr key={id} onClick={() => goToRestaurantMenu(id)}>
                <td>{name}</td>
                <td>{rating}</td>
                <td>{cusine}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(restaurantListComponent);
