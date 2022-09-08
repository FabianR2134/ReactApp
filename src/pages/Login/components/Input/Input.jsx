import React from 'react';
import './Input.css';

export const Input = ({attribute, handChange, param}) => {
  return (
    <div className='input'>

        <input 
          id={attribute.id}
          name={attribute.name}
          placeholder='Esto es un campo de texto'
          typeof={attribute.typeof}
          onChange={(e) => handChange(e.target.name, e.target.value)}
          className='regular-style'
        />

    </div>
  )
}
