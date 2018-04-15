import React from 'react'
import Item2 from './Item2'

export default class List2 extends React.Component{

	render(){
          

	   return(

	        	<div 
	   	            style = {{
	   	            	   backgroundColor : 'rgba(192,192,192,0.3',
                                   display : 'flex',  
                                  flexWrap : 'nowrap',
                                 overflowX : 'scroll',
                                 borderTop : '0.5px solid white',
                              borderBottom : '0.5px solid white'
                              
                              
                            }}>
	   		{

	   			this.props.hours.map( (ele,i) => {
	   				
	   				if(i<=7 && i>=0){
	   					
	   				return <Item2
                         color = {this.props.color}
                           key = {i}
                           {...ele }
	   				       />
	   				}else return null
	   			})
	   		
	   		}
       
	   	</div>

	   )
	}
}