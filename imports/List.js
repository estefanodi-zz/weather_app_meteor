import React from 'react'
import Item  from './Item'

export default class List extends React.Component {

 
    
 
	render(){
    // if(true) return null
      return (
            <div style={{
                         backgroundColor : 'rgba(192,192,192,0.3',
                               borderTop : '0.5px solid grey',
                            borderBottom : '0.5px solid grey',
                                  height : '55%',
                               overflowY : 'scroll'
                               //overflowX : 'hidden'
                       }}>
                        {

                          this.props.days.map( (ele, i) => {  
                                if(i != 0 && i < 9){
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
 

