import React, { useState,useEffect} from 'react'
import './TopNews.css'

const TopNews = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://gnews.io/api/v3/top-news?token=6ca352be4cdd3daf22875c9d022dd2b2')
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
                        <div className="card-panel teal hoverable" >
                        <a href={`${item.url}`} className="white-text">{item.title}</a>
                        <br /><br />
                        <div>
                        <small className='center-align' style={{float:"right"}}><a href={`${item.source.url}`} className="white-text">{item.source.name}</a></small>
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

export default TopNews
