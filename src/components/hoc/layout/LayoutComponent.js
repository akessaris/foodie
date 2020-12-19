import React from 'react';
import HeaderComponent from '../header/HeaderComponent';
import './LayoutComponent.css';
import PropTypes from "prop-types";


const layoutComponent = (props) => {
  return (
    <>
      <nav><HeaderComponent /></nav>
      <main className="content">{ props.children }</main>
    </>
  )
}

layoutComponent.propTypes = {
  children: PropTypes.object.isRequired
};

export default layoutComponent;
