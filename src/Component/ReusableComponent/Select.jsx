import React, { useId } from 'react'
import { forwardRef } from 'react'

function Select({label,options,className,...props},ref) {
    const id=useId()
  return (
    <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">{label}</label>

        <select id={id} className={`${className}`} {...props} ref={ref}>
            {options?.map((option)=>
            <option value={option.value} key={option.value}>{option.name}</option>)}
        </select>
    </div>
  )
}

export default forwardRef(Select)