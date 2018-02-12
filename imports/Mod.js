import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Autocomplete from 'react-google-autocomplete'
import { Images } from './Images'

export default class Mod extends React.Component{
  


    state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  callYourLocation(lat,lng){
     this.props.yourLocation(lat,lng)
     this.props.week(lat, lng)
     this.props.hours(lat, lng)
     
  }





  render(){

 

        let changeCity = {
             
              WebkitMaskBoxImage : `url(${Images['change']})`,
                 backgroundColor : '#737373',
                          height : '32px',
                           width : '32px',
                  backgroundSize : '70% 70%',
                backgroundRepeat : 'no-repeat'
        }
     
    return(
              <Modal
                    trigger = {<div style={changeCity} onClick={this.handleOpen} ></div>}
                       open = {this.state.modalOpen}
                    onClose = {this.handleClose}
                    //basic
                       size = 'small'
               >
                
             <Modal.Content style={{
                               backgroundColor : 'rgba(192,192,192,0.3',
                                     minHeight : '25%'
                                   }}>

           
             <Icon    
                      name = 'close' 
                   onClick = {this.handleClose}  
                     style = {{
                               color : 'grey',
                               float : 'right'}}
                      size = 'big'

                /> 
          

           <Autocomplete  
                        
                       style = {{
                                 width : '96%',
                              fontSize : '1.7em',
                               padding : '3% 0',
                                margin : '4% 2%'}}
                        type = 'text'
                        
             onPlaceSelected = {(place) => {
                      
                                  let lat = place.geometry.location.lat()
                                  let lng = place.geometry.location.lng()
                                        this.callYourLocation(lat,lng)
                                        this.handleClose() 
                                          }}/>

          </Modal.Content>
        
      </Modal>
        )
  }
}


   
   
       

 

