import React,{useState} from 'react'

const InputCity = ( ) => {
    const [city, setCity] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const [temp, setTemp] = useState(0)
    const [error, setError] = useState([])
    const getCityName = (city) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17136b05c3b31e6ace3f62870065c6e2`
        // setIsFetching(true)
        fetch(url)
        .then(res=> res.json())
        .then(result =>{
            console.log(result)
            const kelvin = result.main.temp
            console.log(kelvin)
            const cel = Math.round(kelvin - 273.15)
            console.log(cel)
            setIsFetching(true)
            setTemp(cel)
            
        })
        .catch(error =>{
            setError(error)
            setIsFetching(false)    
        })
    }
    const showTemperature = () =>{
        if(temp !== ''){
            return(
                <h6>Temperature is {temp} celcius</h6>
            )
        }
        else{
            return(
            <h6>Enter Name of city</h6>
            )
        }
        
    }
        
    return (
        <div className="row">
            <input type="text" className="col s4" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="Enter Name of your city" />
            <button className="waves-effect waves-light btn col s4" onClick={()=> getCityName(city)}><i class="material-icons right">cloud</i>Temperature</button>
            <span style={{position:"relative"}} className="col s4">
                {
                    isFetching ? showTemperature() : null
                }
            </span>
        </div>
    )
}

export default InputCity
