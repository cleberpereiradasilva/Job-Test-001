import React from 'react';
import { Link } from 'react-router-dom'
import { MakeLink } from '../utils/helper'


function isFree(free){
	if(free === true){
		return  <img src='/Assets/ic_shipping.png'  alt='Free Shipping' />
	}else{
		return ''
	}
}

function makeList(props){
  	return props.list.map(item => (
  			<li key={`product-item-${item.id}`}>  				
  				<div className='row'>
					<div className='dv-thumbnail'>
						<Link to={MakeLink(item.id, item.title)}>
							<img src={item.thumbnail} className='img-thumbnail' alt={item.title} />
						</Link>
					</div>
					
					<div >
						<Link to={ MakeLink(item.id, item.title)}>
							<div className='col product-price'>							
								$ {item.price}	{isFree(item.shipping.free_shipping)}
							</div>	
							<div className='col product-title'>
								{item.title}	
							</div>					
						</Link>				
					</div>					
					<div className='pull-right'>
							{item.address.state_name}	
					</div>	
				</div>  			
  			</li>
  		))
}


export default (props) => (
	<div className='container'>
    	<section className='row'>    		
	      	<div className='col-12 breadcrumbs'>
				{ props.breadcrumbs }	      		
	      	</div>

	      	<div className='col-12 no-pad'>
				<ol className='search-results'>
					{makeList(props)}					
				</ol>
	      	</div>
	    </section>
    </div>
)