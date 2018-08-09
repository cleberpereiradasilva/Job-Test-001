import React from 'react';

export default (props) => (
	<div className='container'>
        <section className='row product-detail'>                  
              <div className='col-12'></div>          
              <div className='col-1'></div>
              <div className='col-11 product-description-title'> 
                    Descriptión del Produto
              </div>        
              <div className='col-1'></div>                
              <div className='col-10 product-description'> 
                  <pre>
                    {props.description}
                  </pre>
              </div>          
        </section>
      </div>
)