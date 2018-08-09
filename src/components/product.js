import React, { Component } from 'react';
import axios from 'axios';
import { API_ITEM } from '../api-config';

import SearchBarTemplate from '../templates/searchBar'
import DescriptionTemplate from '../templates/description'
import ProductTemplate from '../templates/product'

class Product extends Component {

  constructor(props){  	
    super(props)   
    this.changeHandle = this.changeHandle.bind(this)
    this.doClick = this.doClick.bind(this)

    this.ITEM_URL = API_ITEM +'/items'     
    const id = props.match.params.id.split('-')
    this.state = ({      
      id: id[0],
      as_word:'',
      placeholder: 'Nunca dejes de buscar',
      product: {},
      image: '',
      condition: 0,
      sold_quantity: 0,
      title: '',
      price: '',      
    })
    this.getItem(id[0])
  }

  getItem(id){    
    axios.get(`${this.ITEM_URL}/${id}`)
      .then(res => {
        const product = res.data;        
        this.setState({...this.state,
          product: product,
          image: product.pictures[0].url, 
          condition: product.condition,
          sold_quantity: product.sold_quantity,
          title: product.title,
          price: product.price,
          description: product.description.plain_text
        })
    })
  }
  
  changeHandle(e){ 
    this.setState({...this.state,
      as_word: e.target.value
    })
  }

  doClick(){    
    this.props.history.push(`/items?search=${this.state.as_word}`);   
  }

  render() {
    return (      
      <div className='nav-header'>  
     
      <SearchBarTemplate  
          changeHandle={ this.changeHandle }
          doSearch ={ this.doClick }
          as_word = { this.state.as_word } 
          placeholder = { this.state.placeholder }
        />   

       
        <ProductTemplate
           id={this.state.id} 
           image={this.state.image} 
           condition={this.state.condition} 
           sold_quantity={this.state.sold_quantity} 
           title={this.state.title} 
           price={this.state.price} 
        />

        <DescriptionTemplate description={this.state.description} />

      </div>
    );
  }
}

export default Product;
