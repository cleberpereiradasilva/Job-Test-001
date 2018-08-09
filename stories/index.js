import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DescriptionTemplate from '../src/templates/description'
import ResultGridTemplate from '../src/templates/resultGrid'
import SearchBarTemplate from '../src/templates/searchBar'
import ProductTemplate from '../src/templates/product'
import '../src/index.css'

const props = [
	{ id:1, title: 'Titulo', thumbnail: 'http://www.kazadosom.com.br/image/cache/data/icone-500x500.png', price: '00', shipping : { free_shipping: 1 }, address: {state_name: 'name'} },
	{ id:2, title: 'Titulo', thumbnail: 'http://www.kazadosom.com.br/image/cache/data/icone-500x500.png', price: '00', shipping : { free_shipping: 0 }, address: {state_name: 'name'} },
	{ id:3, title: 'Titulo', thumbnail: 'http://www.kazadosom.com.br/image/cache/data/icone-500x500.png', price: '00', shipping : { free_shipping: 1 }, address: {state_name: 'name'} },
	{ id:4, title: 'Titulo', thumbnail: 'http://www.kazadosom.com.br/image/cache/data/icone-500x500.png', price: '00', shipping : { free_shipping: 0 }, address: {state_name: 'name'} }
	]
	


storiesOf('Componentes', module)
  .add('Descrição do Produto', () => (
    <DescriptionTemplate description = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut bibendum tortor in arcu luctus molestie a vitae augue. Maecenas ut nulla ut augue rhoncus bibendum. 
    Suspendisse consequat mauris id turpis iaculis, sit amet euismod ligula sodales. Nunc faucibus interdum 
    lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Curabitur at nisl lobortis, mollis odio eu, hendrerit magna. Sed vitae consectetur eros, 
    quis sodales ante. Duis et nisi libero. Suspendisse at libero massa. Mauris euismod augue velit, 
    et sagittis arcu congue eu. Proin at nunc accumsan, rhoncus neque id, convallis dui.`} />
  ))
  .add('Detalhes do Produto', () => (
    <ProductTemplate
           id={`MLA1231232`} 
           image={`http://www.kazadosom.com.br/image/cache/data/icone-500x500.png`} 
           condition={`Novo`} 
           sold_quantity={`521`} 
           title={`Produto 01`} 
           price={`2010.00`} 
    />
  ))
  .add('Barra de busca', () => (  		
  		<Router> 
  			<div className='nav-header'>	
    		<SearchBarTemplate 	
	    		changeHandle={ () => {console.log('Digitou') } }
	    		doSearch ={ () => {console.log('Clicou')} }
	    		as_word = {`Texto`} 
	    		placeholder = { `placeholder` }
	    	/>   
	    	</div>
	    </Router>
  )) 
  .add('Resultado da busca', () => (  		
  		<Router> 
  			<div className='nav-header'>	
    		<ResultGridTemplate
	    		breadcrumbs='linkd > link > link'
	    		list={props}          
	    	/>  
	    	</div>
	    </Router>
  )) 