import React, {useState, useEffect} from 'react'
import './style.css'

const SearchNews = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://gnews.io/api/v3/search?q=example&token=52e44cf3ebc334349d3416738c6e74be')
        .then(res => res.json())
        .then(result =>{
            setData(result.articles)
            console.log(result.articles)
        })
    }, [])
    return (
        <div>
            {
                data.map( item =>{
                    return(
                    <div className="row" key={item.title}>
                    <div className="col s12">
                    <div className="card hoverable">
                    <div className="card-image">
                        <a href={`${item.url}`} >
                        <img className="col s12" src={item.image} alt="" width="100%" height="50%" />
                        </a>
                        </div>
                        <div className="card-content teal " >
                        <a href={`${item.url}`} className="white-text">{item.title}</a>
                        <br /><br />
                        <div>
                        <small className='center-align' style={{float:"right"}}><a href={`${item.source.url}`} className="white-text">{item.source.name}</a></small>
                        </div>
                        </div>
                    
                    </div>
                    </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default SearchNews
