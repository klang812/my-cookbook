import React from 'react';

const Button = (props) => (
  <button
    style={props.style}
    className={props.klass}
    onClick={props.action}>
  </button>
)

export default Button;

