import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewsBody from './component/NewsBody/newsBody'
import NewsBar from './component/NewsBar/newsBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    	<Switch>
			<Route path='/NewsBar' component={NewsBar} />
    		<Route path='/' exact component={NewsBody} />
      	</Switch>
    </BrowserRouter>
      
    
  );
}

export default App;
