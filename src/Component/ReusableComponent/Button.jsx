import React from 'react'

function Button({
    name,
    className,
    type,
    ...props
}) {
  return (
    <button
    className={className}
    type={type}
    {...props}
    >
        {name}
    </button>
  )
}

export default Button