import React        from 'react'
//import Header       from './Header'
import Display      from './Display'
import List         from './List'
import axios        from 'axios'
import Autocomplete from 'react-google-autocomplete'
import List2        from './List2'

export default class App extends React.Component{

    constructor(){
    	super()
      this.hours=this.hours.bind(this)
      this.yourLocation=this.yourLocation.bind(this)
      this.week=this.week.bind(this)
      
     
    	this.state={
	        days : [],
	       today : {},
	       hours : []
      
    	}
    }

//*********************************WILL MOUNT*******************************************
  componentWillMount(){

    navigator.geolocation.getCurrentPosition( position  => {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        this.yourLocation(latitude,longitude)
        this.week(latitude, longitude)
        this.hours(latitude, longitude)
    })

  }
//*****************************GET CURRENT POSITION*************************************

  yourLocation(latitude,longitude){
          axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=16909a97489bed275d13dbdea4e01f59`)
        .then((res) => {
     
    
var arr = res.data.name.split(',');
console.log(arr)
if(arr[0].length>11){arr[0]=arr[0].slice(0,11)+'.'}

          this.setState({
            today:{
              city:arr[0],
              temp:res.data.main.temp,
              hum:res.data.main.humidity,
              wind:res.data.wind.speed,
              icon:res.data.weather[0].icon,
              desc:res.data.weather[0].description              
            }
          })
        })

  }

//*****************************WEEK DAYS************************************************
  week(latitude,longitude){
    var that = this
       axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=10&APPID=16909a97489bed275d13dbdea4e01f59`)
            .then((resp)=> {
              console.log(resp.data.list)
              that.setState({days:resp.data.list})
            })
            .catch(error => {
                    console.log(error)
})
  }
//*****************************DAY HOURS*************************************************
hours(latitude,longitude){
    var that = this
       axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=16909a97489bed275d13dbdea4e01f59`)
            .then((resp)=> {
              that.setState({hours:resp.data.list})
             console.log(resp.data.list)
            })
           .catch(error => {
                   console.log(error)
            })
  }




//************************************REQUEST********************************************

	render(){

    let week = {

               display : 'grid',
      gridTemplateRows : '35% 55% 10%'
    }

		return(
      
            
           <div className='principal'>

                  

                   
			                 <Display 
                            className  = 'display'
                            today  = {this.state.today}
                             week  = {this.week}
                     yourLocation  = {this.yourLocation}
                            hours  = {this.hours}
                            color  = {this.state.color}   
                       />
                        
                 

                  <div style={week}>

                       <List2 
                           hours  = {this.state.hours}
                           color  = {this.state.color}
                           style  =  {{backgroundColor:'grey'}}
                       />

                       <List 
                            days  = {this.state.days}
                           color  = {this.state.color}
                           style  =  {{backgroundColor:'green'}}
                       /> 

                       <div style = {{
                       	          backgroundColor : 'rgba(192,192,192,0.3',
                                  borderTop : '0.5px solid white'
                       }}></div>
                 
                 </div>
			     </div>
     
			   )
	
	}
}


