import React from 'react';

const Input = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.id} className='form-label'>{props.title}</label>
      <input
        className='form-control'
        type={props.inputType}
        id={props.id}
        name={props.name}
        defaultValue={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  )
}

export default Input;
