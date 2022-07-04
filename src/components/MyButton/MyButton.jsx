import React from 'react'
import './MyButton.css'
const MyButton = ({disabled,handle,children}) => {
  return (
    <button disabled={disabled} onClick={e => handle(e.preventDefault())} className='MyButton'>{children}</button>
  )
}

export default MyButton