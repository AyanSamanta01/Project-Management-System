import React from 'react'
import { useId } from 'react'
import { forwardRef } from 'react';

function Input({
    label,
    type,
    className,
    labelClassname,
    ...props
},ref) {

const id =useId();
  return (
    <div className='flex flex-col'>
    {label && <label className={`block text-lg font-semibold ${labelClassname}`}  htmlFor={id}>{label}
              </label>}
              <input
              type={type}
              className={className}
              id={id}
              ref={ref}
              {...props}
              >
              </input>
    </div>
  )
}

export default forwardRef(Input)