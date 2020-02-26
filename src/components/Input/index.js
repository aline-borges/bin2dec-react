import React from 'react';

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        readOnly={props.readonly}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}

export default Input;