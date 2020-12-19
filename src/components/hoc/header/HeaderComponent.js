import React from 'react';
import { NavLink } from "react-router-dom";

export default function HeaderComponent() {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Foodie
      </NavLink>
    </nav>
  );
}
