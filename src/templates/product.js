import React from 'react';
export default (props) => (
	 <div className='container'>
          <section className='row'>       
              <div className='col-12 breadcrumbs'>
                          
              </div>
          </section>
          <section className='row product-detail'>  
              <div className='col-2'></div>
              <div className='col-6 product-image border'>
                <img src={props.image} alt={props.title} />
              </div>
              <div className='col-3'>
                <div className='col-12 product-condition'>
                    {props.condition} - {props.sold_quantity} vendidos
                </div>
                <div className='col-12 product-title'>
                    {props.title}
                </div>
                <div className='col-12 product-price'>
                    $ {props.price}
                </div>
                <div className='col-12 product-button'> 
                    <button className='btn btn-primary'>Comprar</button>
                </div>
              </div>              
          </section>
          
    </div>
)