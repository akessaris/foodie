import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRecipeForItem } from '../../api/recipeApi';
import { getMenuItems } from '../../api/restaurantApi';
import SpinnerComponent from '../shared/spinnerComponent/SpinnerComponent';

export default function RestaurantPageComponent() {
  const { state: { id, name } } = useLocation();

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const { data: { data } } = await getMenuItems(id) || menuItems;
      setMenuItems(data);
    } catch(e) {
      // TODO: pass to logging service or present error in user-friendly modal
      console.log(e);
    }
    setLoading(false);
  },[]);

  const getRecipe = async (item) => {
    await getRecipeForItem(item);
  }

  const menuItemList = menuItems.map(({ menu_item_name: name, menu_item_price: price, menu_item_description: desc }) => (
    <tr key={id} onClick={ () => getRecipe(name) }>
      <td>{name}</td>
      <td>{price}</td>
      <td>{desc}</td>
    </tr>
  ));

  return (
    <>
      <h2>{name}</h2>
      {
        loading 
          ? <SpinnerComponent />
          : <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              { menuItemList }
            </tbody>
          </table>
      }
    </>
  );
}