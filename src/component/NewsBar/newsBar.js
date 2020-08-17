import React from 'react'
import {Link } from 'react-router-dom'
import './newsBar.css'

const NewsBar = (  ) => {
    return (
        <nav className="navbar sticky-top" >
            <div style={{position:"relative"}}>
            <Link to="/" ><span>Home</span></Link>|
            <Link to="/WorldNews"><span>World</span></Link>|
            <Link to="/NationNews"><span>Nation</span></Link>|
            <Link to="/BusinessNews"><span>Business</span></Link>|
            <Link to="/TechnologyNews"><span>Technology</span></Link>|
            <Link to="/EntertainmentNews"><span>Entertainment</span></Link>|
            <Link to="/SportsNews"><span>Sports</span></Link>|
            <Link to="/ScienceNews"><span>Science</span></Link>|
            <Link to="/HealthNews"><span>Health</span></Link>
            </div>
        </nav>
        
    )
}

export default NewsBar
