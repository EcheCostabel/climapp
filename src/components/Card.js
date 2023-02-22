import React from 'react'
import { Spinner } from './Spinner'

export const Card = ({loadingData, showData, wheater, forecast}) => {

    if(loadingData){
        return <Spinner />
    }
  return (
    <div className='mt-5'>
        {
            showData === true ? (
                <div className='container'>
                    <div className='card mb-3 mx-auto bg-dark text-light'>
                        
                    </div>
                </div>
            ) : (
                <h2 className='text-light'> SIN DATOS</h2>
            )
        }
        
    </div>
  )
}
