import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App'
import Product from './components/product'


export default (props) => (      
    	<Router>    		
      		<Switch>      			
        		<Route exact path="/" component={App} />  	
        		<Route exact path="/items" component={App} />  	
        		<Route exact path="/items/:id" component={Product} />  
    		</Switch>
    	</Router>
)  