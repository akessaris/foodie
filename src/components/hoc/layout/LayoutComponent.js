import React from 'react';
import HeaderComponent from '../header/HeaderComponent';
import './LayoutComponent.css';

export default function LayoutComponent (props) {
  return (
    <>
      <nav><HeaderComponent /></nav>
      <main className="content">{ props.children }</main>
    </>
  )
};
