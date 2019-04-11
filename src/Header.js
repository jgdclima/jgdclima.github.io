import React, { Component } from 'react';
import Button from './Button';

function Header(props){
  return(
    <div className="Header">
      <Button class='primary' text="JL" fun=""></Button>
      <Button class='secondary' text="Projects" fun=""></Button>
      <Button class='secondary' text="Creative" fun=""></Button>
      <Button class='secondary' text="Case Studies" fun=""></Button>
      <Button class='secondary' text="Resume" fun=""></Button>
    </div>
  );
}
export default Header;
