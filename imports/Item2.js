import React from 'react'
import { Images } from './Images';

export default class Item2 extends React.Component{

render(){

     let img = {
             width:'35%'
     }
     	
     let hour = {
       
		       textAlign : 'center',
		    borderRadius : '10px',
		          margin : '3% 1%',
		           width : '100px',
		            flex : '0 0 auto',
		         padding : '0.4em 0',
		           float : 'left',
		           color : 'white',
		      transition : 'background-color 2s ease-in-out',
		 backgroundColor : `${this.props.color}`,
		          border : '1px solid grey'
}


         let {dt_txt} = this.props
              dt_txt  = dt_txt.split(' ')[1].slice(0, 5)
         let { icon } = this.props.weather[0]
         let { temp_min }  = this.props.main
         let { temp_max }  = this.props.main

	   return(

	     	<div style={hour}>
	     	
                 <p className='parag'>{dt_txt}</p>
                 <img style={img} src={Images[icon]}/>
                 <p className='parag'>Min: {Math.round(temp_min)}</p>
                 <p className='parag'>Max: {Math.round(temp_max)}</p>

			</div>

	   )
	}
}