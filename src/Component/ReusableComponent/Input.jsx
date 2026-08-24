import React from 'react'
import { useId } from 'react'

function Input({
    label,
    type,
    className,
    ...props
}) {

const id =useId();
  return (
    <div className='flex flex-col'>
    {label && <label className="block text-lg font-semibold"  htmlFor={id}>{label}
              </label>}
              <input
              type={type}
              className={className}
              id={id}
              {...props}
              >
              </input>
    </div>
  )
}

export default Input