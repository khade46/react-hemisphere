import React from 'react';
import northwest from './images/northwest.jpeg';
import southwest from './images/southwest.jpeg';
import northeast from './images/northeast.jpeg';
import southeast from './images/southeast.jpeg';

const hemisphereConfig = {
    NorthEastern:{
        text: 'It is NorthEastern hemisphere',
        picture: northeast
    },
    SouthEastern:{
        text: 'It is SouthEastern hemisphere',
        picture: southeast
    },
    NorthWestern:{
        text: 'It is NorthWestern hemisphere',
        picture: northwest
    },
    SouthWestern:{
        text: 'It is SouthWestern hemisphere',
        picture: southwest
    }



}
const HemisphereDisplay = (props) => {
    console.log(props.latitude, props.longitude)
    const hemisphere = props.latitude > 0 && props.longitude > 0 ? 'NorthEastern': props.latitude > 0 && props.longitude < 0 ? 'NorthWestern' : props.latitude < 0 &&  props.longitude > 0 ? 'SouthEastern': 'SouthWestern'
    const{text,picture} = hemisphereConfig[hemisphere]
    return(
        <div>
            <div className='ui header'>{text}</div>
            <img className='ui medium rounded image' src={picture} alt='hemisphere'></img>
            Latitude:{props.latitude}
            <br></br>
            Longitude:{props.longitude}
        </div>
    )
}
export default HemisphereDisplay;