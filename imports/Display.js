import React from 'react'
import Mod   from './Mod'
import { Images } from './Images'
export default class Display extends React.Component{
  
 

  handleClick(){

    navigator.geolocation.getCurrentPosition( position  => {
        var latitude  = position.coords.latitude
        var longitude = position.coords.longitude
                this.props.yourLocation(latitude,longitude)
                this.props.week(latitude, longitude)
                this.props.hours(latitude, longitude)
    })
  }



   render(){

       
          let city = {
                     display : 'grid',
         gridTemplateColumns : '2fr 12fr 2fr',
                  alignItems : 'center',
     	              fontSize : '3em',
     	             textAlign : 'center',
                       color : '#4d4d4d'

          }

         let temp = {
     	              fontSize : '3.5em',
                   textAlign : 'right',
                paddingRight : '14%',
                       color : '#4d4d4d'
         }

         let img = {
      	               width : '50%',
      	        borderRadius : '50%'
         }


          let circle = {
                	   position : 'absolute',
                	     height : '180px',
                	      width : '180px',
              backgroundColor : `${this.props.color}`,
              backgroundImage : `url(${Images[this.props.today.icon]})`,
                 borderRadius : '50%',
                    marginTop : '14%',
                   marginLeft : '3%',
                       border : '7px solid #b3b3b3',
                  borderRight : 'none',
               backgroundSize : '70% 70%',
             backgroundRepeat : 'no-repeat',
           backgroundPosition : '48% 45%',
                   transition : 'background-color 2s ease-in-out',
            }

         let hum = {
                paddingRight : '5%',
                    fontSize : '2em',
                   textAlign : 'right',
                  paddingTop : '3%',
                       color : '#4d4d4d'
         }
         
         let img2 = {

         	            height : '30px',
                       width : '30px',
                       float : 'right',
          WebkitMaskBoxImage : `url(${Images["hum"]})`,
             backgroundColor : `${this.props.color}`,
            backgroundRepeat : 'no-repeat',
                  transition : 'background-color 2s ease-in-out'
          }

         let img3 = {
                    height : '40px',
                     width : '40px',
                     float : 'right',
        WebkitMaskBoxImage : `url(${Images["wind"]})`,
           backgroundColor : `${this.props.color}`,
          backgroundRepeat : 'no-repeat',
                transition : 'background-color 2s ease-in-out'
         }

         let wind = {
             paddingRight : '5%',
                 fontSize : '2em',
                textAlign : 'right',
                    color : '#4d4d4d'
           
         }

        let bottom = {
                fontSize : '2.5em',
               textAlign : 'center',
              paddingTop : '4% ',
           paddingBottom : '0',
                   color : '#4d4d4d'
        }

        let backButton = {
            WebkitMaskBoxImage : `url(${Images['search']})`,
               backgroundColor : '#737373',
                        height : '35px',
                         width : '35px',
                backgroundSize : '70% 70%',
              backgroundRepeat : 'no-repeat',
                   justifySelf : 'center',
                   paddingLeft : '2%'
       }
      
   	  return(
         
              <div style={{backgroundColor:'rgba(192,192,192,0.3',
                            borderTop : '0.5px solid grey'
                          }}>
                  
                 <div style={circle}></div>

                 <div style={city}>

                              <div style={backButton}
                                    onClick={this.handleClick.bind(this)}>
                              </div>

                              <div>{this.props.today.city}</div>

                               <Mod  color = {this.props.color}
                               week = {this.props.week}
                       yourLocation = {this.props.yourLocation}
                              hours = {this.props.hours}
                          
                               /> 
                 </div>

                 <div style={hum}>
                        
                              <div style={img2}></div>
                              <div>{this.props.today.hum + '%'}</div>
                 </div>

                              <div style={temp}>{Math.round(this.props.today.temp)}
                              <span style={{fontSize:'0.8em'}}> °</span>c</div>
     
                 <div style={wind}>
                    
          	                   <div style={img3}></div>
                               <div>{Math.round(this.props.today.wind) + 'mph'}</div>
                 </div>

                 <div style={bottom}>
                              {this.props.today.desc} 
                 </div>
                      
            </div> 
          )
   }
}




