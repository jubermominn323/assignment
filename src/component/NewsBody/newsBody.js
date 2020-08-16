import React from 'react'
import NewsBar from '../NewsBar/newsBar'
import './style.css'
import TopNews from './Top News/TopNews'
import SearchNews from './SearchNews/SearchNews'

const NewsBody = () => {

    return (
        <div>
            <NewsBar />
            <div className="row">
                <div className="col s4 center-align">
                <span className='center-align '>Top News For You</span>
                <TopNews />
                </div>
                <div className="col s8 center-align">
                    <span className="center-align">News For You</span>
                    <SearchNews />
                </div>
            </div>
        </div>
    )
}

export default NewsBody
