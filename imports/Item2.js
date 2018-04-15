import React from 'react'
import { Images } from './Images';

export default class Item2 extends React.Component{

render(){

     let img = {
     	     marginTop:'10%',
             width:'40%'
     }
     	
     let hour = {
       
		       textAlign : 'center',
		    borderRadius : '10px',
		          margin : '3% 1%',
		           width : '100px',
		            flex : '0 0 auto',
		           float : 'left',
		           color : 'white',
		           heigth: '100%',
		 backgroundColor : 'transparent',
		   alignSelf     : 'center'

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
                 <p className='parag'>{Math.round(temp_max)} &#186; c</p>

			</div>

	   )
	}
}