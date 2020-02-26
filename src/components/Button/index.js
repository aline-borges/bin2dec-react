import React from 'react';

const Button = (props) => {
  return (
    <button className="btnConvert" onClick={props.onClick}>{props.text}</button>
  );
};

export default Button;