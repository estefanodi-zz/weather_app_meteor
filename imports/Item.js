import React from 'react'
import { Images } from './Images';
export default class Item extends React.Component{
   
  
	render(){

        
    let img = {
                   width : '35%',
             justifySelf : 'center'
    }
     	
    let weekDay = {
                      display : 'grid',
          gridTemplateColumns : '2fr 2fr 2fr 2fr',
                    textAlign : 'center',
                   alignItems : 'center',
                 marginBottom : '2%',
                    borderTop : '1px solid grey',
                 borderBottom : '1px solid grey',
                        width : '100%',
                        color : 'white',
                   transition : 'background-color 2s ease-in-out',
              backgroundColor : `${this.props.color}`
    }

     let day = new Date(this.props.dt * 1000)
     day = day.toString()
     day = day.split(" ")[0]+" "+day.split(" ")[2]
     let { min } = this.props.temp
     let { max } = this.props.temp
     let icon = this.props.weather[0].icon
     
		return(
			<div style={weekDay}>
                 <p className='parag'>{day}</p>
                 <img style={img} src={Images[icon]}/>
                 <p className='parag'>Min: {Math.round(min)}</p>
                 <p className='parag'>Max: {Math.round(max)}</p>
			</div>

  			  )

	}
}

