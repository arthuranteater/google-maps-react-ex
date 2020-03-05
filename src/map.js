import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react'
 
 
export class MapContainer extends React.Component {
    state = {}

    componentDidMount() {
        console.log('mounted')
         if (window.navigator.geolocation) {
             console.log('setting coords')
             window.navigator.geolocation.getCurrentPosition(c => this.setState({x: c.coords.latitude, y: c.coords.longitude}))
            }
        }

    render() {

        const {x, y} = this.state

        return (
            <>
            {Object.keys(this.state).length !== 0 ?
         <Map
          google={this.props.google}
          initialCenter={{
            lat: x,
            lng: y
          }}
          zoom={8}
        >
          </Map> :
          <></>
            }
            </>
        )
    }
}

export default GoogleApiWrapper({apiKey: process.env.REACT_APP_TUT_MAP})(MapContainer)