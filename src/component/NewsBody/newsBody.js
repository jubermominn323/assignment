import React from 'react'
import './style.css'
import TopNews from './Top News/TopNews'
import SearchNews from './SearchNews/SearchNews'
import NewsBar from '../NewsBar/newsBar'
import InputCity from '../WeatherBar/InputCity'

const NewsBody = () => {
    return (
        <div>
            <InputCity />
            <NewsBar />
            <div className="row">
                <div className="col s6 center-align">
                    <span className='center-align '><b> Top News </b></span>
                    <TopNews />
                </div>
                <div className="col s6 center-align">
                    <span className="center-align"><b> Latest News For You </b></span>
                    <SearchNews />
                </div>
            </div>
        </div>
    )
}

export default NewsBody
