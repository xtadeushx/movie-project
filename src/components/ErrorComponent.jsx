import React from 'react'

const ErrorComponent = ({ message }) => {
    return (
        <h5 className='green-text text-lighten-1'>Server error: <span className='red-text'>{message}</span> </h5>
    )
}

export default ErrorComponent