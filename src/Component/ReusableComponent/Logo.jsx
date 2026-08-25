import React from 'react'
import LogoImg from "/Logo.png"

function Logo({...props}) {
  return (
    <img
    src={LogoImg}
    {...props}/>
  )
}

export default Logo