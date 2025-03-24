import React from 'react'

function FormikErrors(props) {
  return (
    <div className='error'>
      {props.children}
    </div>
  )
}

export default FormikErrors
