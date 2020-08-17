import React,{useState} from 'react'
import InputCity from './InputCity'

const WeatherBar = ( ) => {
    const [isFetching, setIsFetching] = useState(false)
    const [temp, setTemp] = useState()
    const [error, setError] = useState([])
    const getCityName = (city) => {
        // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17136b05c3b31e6ace3f62870065c6e2`
        // // setIsFetching(true)
        // fetch(url)
        // .then(res=> res.json())
        // .then(result =>{
        //     console.log(result)
        //     const kelvin = result.main.temp
        //     console.log(kelvin)
        //     const cel = Math.round(kelvin - 273.15)
        //     console.log(cel)
        //     setTemp(cel)
        //     isFetching(true)
        // })
        // .catch(error =>{
        //     setError(error)
        //     setIsFetching(false)
            
        // })
    }
    // const showTemperature = 
    //     <h3>Temperature is {temp} in celcius</h3>
    
    return (
        <div>
            Hello
           {/* <InputCity getCityName={getCityName} />
            {isFetching ? showTemperature : null} */}
        </div>
    )
}

export default WeatherBar
