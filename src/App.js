import {
  Switch,
  Route,
} from "react-router-dom";
import LayoutComponent from "./components/hoc/layout/LayoutComponent";
import RestaurantListComponent from "./components/restaurantList/RestaurantListComponent";
import RestaurantPageComponent from "./components/restaurantPage/RestaurantPageComponent";

function App() {
  return (
    <LayoutComponent>
      <Switch>
        <Route exact path={["/", "/restaurants"]}>
          <RestaurantListComponent />
        </Route>
        <Route path={`/restaurants/:restaurantId`}>
          <RestaurantPageComponent />
        </Route>
      </Switch>
    </LayoutComponent>
  );
}

export default App;
