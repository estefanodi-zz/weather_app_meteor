import React from 'react'
import Watch from './Watch'
export default class Header extends React.Component{
   constructor(){
      super()
      this.state={
    
      }
      }
  
  componentWillMount(){
     
     let date = Date(); 
     console.log(date)
     let day   = date.split(' ')[0];
     let dayN  = date.split(' ')[2];
     let month = date.split(' ')[1];
     this.setState({day:day,dayN:dayN,month:month})
  }

	render(){

 let day = {
        
        textAlign:'left',
        color:'white',
        float:'left',
        fontSize:'1.8em'
           
           }
         
    
        return(
              <nav>
                 <div style={day}>
                   {this.state.day+' '+this.state.dayN+' '+this.state.month}
                 </div>
              	<Watch/>
              </nav>
			  )
	}
}