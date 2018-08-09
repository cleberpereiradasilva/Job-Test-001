import React, { Component } from 'react';
import axios from 'axios';
import SearchBarTemplate from '../templates/searchBar'
import ResultGridTemplate from '../templates/resultGrid'
import { API_ROOT } from '../api-config';

const qs = require('query-string');


class Home extends Component {

  constructor(props){
  	super(props)
  	this.URL = API_ROOT +'/items?q='    	
  	this.changeHandle = this.changeHandle.bind(this)
  	this.doSearch = this.doSearch.bind(this)
  	this.getSearch = this.getSearch.bind(this)
  	this.doClick = this.doClick.bind(this)

    const parsed = qs.parse(this.props.history.location.search);
    
  	this.state = ({
  		as_word: (parsed.search === undefined ? '' : parsed.search),
  		placeholder: 'Nunca dejes de buscar',
  		list: [],
  		maxProducts: 4,
  		breadcrumbs: ''
  	})

  	this.doSearch()
  }

 
  getSearch(value) {    
    if(value !== undefined)    
     
      axios.get(`${this.URL}${value}&offset=0&limit=${this.state.maxProducts}`)
        .then(res => {
          const products = res.data.results;

          let breadcrumbs = ''        
          if(res.data.filters[0] !== undefined){
            breadcrumbs = res.data.filters[0].values[0].path_from_root.map(
          		  item => item.name).join(' > ');  
          }                      
          this.setState({...this.state,
          	list: products,
          	breadcrumbs: breadcrumbs
          });
        
    })
  }

  changeHandle(e){ 
  	this.setState({...this.state,
  		as_word: e.target.value
  	})
  }

  doSearch(){  
  	const parsed = qs.parse(this.props.history.location.search);
    if(parsed.search){     
        this.getSearch(parsed.search)
    }else{
        this.getSearch(this.state.as_word)      
    }
  }

  doClick(){  	
  	this.props.history.push(`/items?search=${this.state.as_word}`);
  	this.doSearch()
  }

  render() {
    return (    	
    	<div className='nav-header'>	
	    	<SearchBarTemplate 	
	    		changeHandle={ this.changeHandle }
	    		doSearch ={ this.doClick }
	    		as_word = {	this.state.as_word } 
	    		placeholder = { this.state.placeholder }
	    	/>   

	    	<ResultGridTemplate
	    		breadcrumbs={this.state.breadcrumbs}
	    		list={this.state.list}          
	    	/>   	
	    	
      </div>
    );
  }
}

export default Home;
