import React, { Component } from 'react';
import Button from './Button';

function Header(props){
  return(
    <div className="Header">
      <Button text="JL" fun=""></Button>
      <Button text="Projects" fun=""></Button>
      <Button text="Creative" fun=""></Button>
      <Button text="Case Studies" fun=""></Button>
      <Button text="Resume" fun=""></Button>
    </div>
  );
}
export default Header;
