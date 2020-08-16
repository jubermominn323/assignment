import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewsBar from './component/NewsBar/newsBar';
import WorldNews from './component/NewsBar/WorldNews/WorldNews'
import NationNews from './component/NewsBar/WorldNews/NationNews'
import BusinessNews from './component/NewsBar/WorldNews/BusinessNews'
import EntertainmentNews from './component/NewsBar/WorldNews/EntertainmentNews'
import TechnologyNews from './component/NewsBar/WorldNews/TechnologyNews'
import ScienceNews from './component/NewsBar/WorldNews/ScienceNews'
import HealthNews from './component/NewsBar/WorldNews/HealthNews'
import SportsNews from './component/NewsBar/WorldNews/SportsNews'
import WholePage from './component/NewsBody/WholePage/WholePage';

import './App.css';


function App() {
  return (
    <BrowserRouter>
    	<Switch>
			<Route path='/NewsBar' component={NewsBar} />
    		<Route path='/' exact component={WholePage} />
        <Route path="/WorldNews" component={WorldNews} />
        <Route path="/NationNews" component={NationNews} />
        <Route path="/BusinessNews" component={BusinessNews} />
        <Route path="/EntertainmentNews" component={EntertainmentNews} />
        <Route path="/TechnologyNews" component={TechnologyNews} />
        <Route path="/ScienceNews" component={ScienceNews} />
        <Route path="/HealthNews" component={HealthNews} />
        <Route path="/SportsNews" component={SportsNews} />
        </Switch>
    </BrowserRouter>
      
    
  );
}

export default App;
