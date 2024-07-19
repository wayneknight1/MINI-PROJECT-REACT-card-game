import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
function DisplayImages({images,setOpenModal}) {

    const [selected,setSelected] = useState({current:'', prev:''});
    const defaultImage = 'https://images.unsplash.com/photo-1624543591046-a874d7d2ae30?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    useEffect(() => {
        let t;
        if(selected?.current && selected?.prev){
            if(selected.prev === selected.current){
            console.log('You Win!!')
            setSelected(temp => {
                return {current:'', prev:''}
            })
           setOpenModal(true)
        }
        }
    }, [selected])

  return (
    <div className='image-outer-container'>
        {images.map(image => {
            return <div className='imageDiv'>
                <img alt='something out here' src={defaultImage} onClick={e => {
                    e.target.src = image;
                    setSelected(temp => {
                        return {
                            prev : temp.current,
                            current : image
                        }
                    })
                }}/>
            </div>
        })}
    </div>
  )
}

export default DisplayImages