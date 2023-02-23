import React, { useState } from 'react'

export const Form = ({newLocation}) => {
    const [ city, setCity ] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city})
        if(city === '' || !city) return;
        newLocation(city)
        alert('Te amo cariño')

    }

  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div className='input-group mb-3 mx-auto'>
                <input type='text' className='form-control' placeholder='Ciudad' onChange={(e)=> setCity(e.target.value)}></input>
                <button className='btn btn-primary input-group-text' type='submit'>Buscar</button>
            </div>
        </form>
    </div>
  )
}
