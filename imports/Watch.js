import React from 'react'

export default class Watch extends React.Component{
	
constructor(){
	super()
	this.state={
        h:new Date().getHours(),
        m:new Date().getMinutes(),
        s:new Date().getSeconds()
    }
     }
 
componentWillMount(){

     let int = setInterval( () =>{
     	
        let today = new Date()
        let h = today.getHours()
        let m = today.getMinutes()
        let s = today.getSeconds()
         if(s<=9){s='0'+s}
         if(m<=9){m='0'+m} 	
     	this.setState({h:h,m:m,s:s})
     },1000)


 }
   	     
 render(){

 	 let watch = {
     	     color : 'white',
     	     float : 'right',
     	  fontSize : '1.8em'
     }
        let { h } = this.state
        let { m } = this.state
        let { s } = this.state
   
        return(
               <div style={watch}><p>{h +':'+m+':'+s}</p></div>
			  )
	}
}