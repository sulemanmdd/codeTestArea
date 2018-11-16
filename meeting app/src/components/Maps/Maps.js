import React, { Component } from 'react';

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Maps extends Component {
    constructor() {
      super()
      
      this.state = {
        coords: null
      };
  
      this.updateCoords = this.updateCoords.bind(this);
    }
  
    componentDidMount() {
      this.setPosition();
    }
  
  
    setPosition() {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({coords: position.coords})
      });
    }
  
    updateCoords({latitude, longitude}) {
      this.setState({coords: {latitude, longitude}})
    }

  
  
    render() {
      const {coords} = this.state;
  
      return (
        <div >
  
          {coords && <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `70vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            coords={coords}
            updateCoords={this.updateCoords}
          />}
          
        </div>
      );
    }
  }
  
  export default Maps;
  
  
  
  
  
  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={14}
      center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
    >
      {props.isMarkerShown && 
      <Marker 
        position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
        draggable={true}
        onDragEnd={position => {
            props.updateCoords({latitude: position.latLng.lat(), longitude: position.latLng.lng()})
        }}
        />}
    </GoogleMap>
  ))
  