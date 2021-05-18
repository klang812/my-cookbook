import React from 'react';

const TextArea = (props) => (
  <div className='form-group'>
    <label className='form-label'>{props.title}</label>
    <textarea
      className='form-control'
      id={props.id}
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      defaultValue={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
)

export default TextArea;

