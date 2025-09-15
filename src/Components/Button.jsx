import React from 'react'

const Button = ({onClick , lable, className}) => {
  return (

      <button className={`btn ${className}`} onClick={onClick}>
        {lable}
      </button>
  )
}

export default Button
