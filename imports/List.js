import React from 'react'
import Item  from './Item'

export default class List extends React.Component {

 
    
 
	render(){
    
      return (
            <div style={{
                         backgroundColor : 'rgba(192,192,192,0.3',
                               overflowY : 'scroll'
                          
                       }}>

                        {

                          this.props.days.map( (ele, i) => {  
                                if(i != 0 && i < 8){
                           return    <Item 
                                        key = {i} 
                                      color = { this.props.color }
                                        {...ele }
                                      
                                      />
                                }else return null
                          })
                        }
   
           </div> 
           
        )
     }
	}
 

