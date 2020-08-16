import React,{useState} from 'react'
import './newsBar.css'

const NewsBar = ( ) => {
    const [data, setData] = useState([])
    const showNews = (topic) =>{
        fetch(`https://gnews.io/api/v3/topics/${topic}?token=ffb0599e377c44b230368f870b6ea436`)
        .then(res => res.json())
        .then(result =>{
            setData(result)
            console.log(result)
        })
        
    }
    return (
        <nav className="navbar sticky-top" >
            <div style={{position:"relative"}}>
            <span onClick={()=>showNews('world')}>World</span>|
            <span onClick={()=>showNews('nation')}>Nation</span>|
            <span onClick={()=>showNews('business')}>Business</span>|
            <span onClick={()=>showNews('technology')}>Technology</span>|
            <span onClick={()=>showNews('entertainment')}>Entertainment</span>|
            <span onClick={()=>showNews('sports')}>Sports</span>|
            <span onClick={()=>showNews('science')}>Science</span>|
            <span onClick={()=>showNews('health')}>Health</span>|
            </div>
            
        </nav>
        
    )
}

export default NewsBar
