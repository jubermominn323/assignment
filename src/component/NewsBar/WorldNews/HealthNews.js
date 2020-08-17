import React,{useState, useEffect} from 'react'
import NewsBar from '../newsBar'

const HealthNews = ( ) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`https://gnews.io/api/v3/topics/health?token=ffb0599e377c44b230368f870b6ea436`)
        .then(res => res.json())
        .then(result =>{
            setData(result.articles)
            console.log(result)
        })
    },[])
    return (
        <div>
            <div>
                <NewsBar />
            </div>
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

export default HealthNews
