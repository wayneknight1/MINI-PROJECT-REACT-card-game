import React from 'react'

export default function Modal() {
    const clickHandler = () =>{
        setTimeout(() => {
            window.location.reload()
        },500)
    }
  return (
    <div className='outer-modal'>
        <div className='inner-modal'>
            You Won!
            <button onClick={clickHandler}>Restart The Game!</button>
        </div>
    </div>
  )
}
