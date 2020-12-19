import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const HomePageComponent = () => {
  const history = useHistory();

  const [zip_code, setZipcode] = useState();

  const handleChange = (event) => {
    setZipcode(event.target.value);
  }

  const goToRestaurants = (event) => {
    event.preventDefault();
    history.push('/restaurants', { search: { zip_code } });
  }

  return (
    <>
      <h2>Foodie</h2>
      <form onSubmit={goToRestaurants}>
        <input id="zip_code" name="zip_code" type="text" placeholder="Zipcode" value={zip_code} onChange={handleChange}></input>
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default HomePageComponent;
