import React from 'react';
import { Link } from 'react-router-dom'


export default (props) => (
	<div className='nav-header'>	     
    	<section className='row'>
    		<div className='col-1'></div>
	      	<div className='col-2 nav-logo'>
	      		<Link to='/'>
	      			<img src='/Assets/Logo_ML_2x.png' alt='Mercado Livre'/>
	      		</Link>
	      	</div>
	      	<div className='col-7'>
	      		<form className="nav-search">
	      			<input 
	      				onChange={(e) => props.changeHandle(e)}
	      				className="nav-search-input" 
	      				value={props.as_word}
	      				placeholder={props.placeholder} 
	      				maxLength="120"
	      				autoFocus="true"
	      				tabIndex="1"
	      				autoComplete="off"
	      				type="text"
	      			/>      		
	      			<button 
	      				type="button" 
	      				className="nav-search-btn"
	      				tabIndex="2"
	      				onClick={() => props.doSearch()}
	      			>
	      				<i className="nav-icon-search"><img src='/Assets/ic_Search.png' alt='Search' /></i>
	      			</button>
	      		</form>
	      	</div>	
	    </section>
    </div>
)