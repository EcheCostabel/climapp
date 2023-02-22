import React, { useState } from 'react'
import axios from 'axios';
import { Form } from './Form';
import { Card } from './Card';

export const WeatherPanel = () => {

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=1a9205dcd2c42177e6cce0168107bcb2&lang=es';
    let cityURL = '&q=';
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=1a9205dcd2c42177e6cce0168107bcb2&lang=es'


    const [ weather , setWeather ] = useState([]);
    const [ forecast , setForecast ] = useState([]);
    const [ loading , setLoading ] = useState(false);
    const [ show , setShow ] = useState(false);
    const [ location, setLocation ] = useState('');

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //WEATHER

        urlWeather = urlWeather + cityURL + loc;

        await axios.get(urlWeather).then((response) => {
            if(!response.ok) throw response.data
            return response.data
        }).then((wheatherData) => {
            console.log(wheatherData)
            setWeather(wheatherData)
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        })

        
        //FORECAST

        urlForecast = urlForecast + cityURL + loc;

        await axios.get(urlForecast).then((response) => {
            if(!response.ok) throw response.data
            return response.data
        }).then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        })

    }


  return (
    <>
        <Form 
        newLocation={getLocation}
        />

        <Card 
            showData={show}
            loadingData={loading}
            weather={weather}
            forecast={forecast}
        />
    </>
  )
}
