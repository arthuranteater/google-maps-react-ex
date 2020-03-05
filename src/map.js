import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react'
 
 
export class MapContainer extends React.Component {
    state = {
        x: 40.854885,
        y: -88.081807,
    }

    componentDidMount() {
        console.log('mounted')
        
    }

    render() {
        return (
         <Map
          google={this.props.google}
          initialCenter={{
            lat: this.state.x,
            lng: this.state.y
          }}
          zoom={8}
          onClick={this.onMapClicked}
        >
          </Map>
        )
    }
};

const key = process.env.REACT_APP_TUT_MAP

console.log(key)

export default GoogleApiWrapper({apiKey: process.env.REACT_APP_TUT_MAP})(MapContainer)