import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

import './bootstrap/bootstrap.min.css';

// import * as firebase from "firebase";
import firebase from './Config/firebase';

import Maps from './components/Maps/Maps';
import Patti from './components/Card/Card';


const provider = new firebase.auth.FacebookAuthProvider();



class App extends Component {
  constructor() {
    super()


    this.state = {
      user: false    
    }

    this.login = this.login.bind(this);
    this.showMaps = this.showMaps.bind(this);
  }
  

  login() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      
    }).catch(function(error) {
      
    });
  }


  showMaps() {
    // <Maps />
    console.log("Maps OK");
    ReactDOM.render(<Maps />, document.getElementById('root'));
  }



  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: true, uid: user.uid });
        localStorage.setItem("uid", user.uid);
      } else {
        this.setState({ user: false });
      }
    });
  }



  render() {
    const { user } = this.state;

    return (
      <div className="App" id="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{paddingTop: 8}}>
            .....Meeting
          </p>

        </header>
        

        <div>
          <Navbar />
          {/* <Home /> */}
          <Route exact path="/" component={Home} />
          <Route path="/Dashboard" render={() => (user ? <Dashboard /> : <Redirect to="/" />)} />
          {/* <Route path="/" Component={} /> */}
        </div>


        <button onClick={this.login} className="btn btn-info" >Login with facebook</button>
          <br />
        <button onClick={this.showMaps} className="btn btn-info" >Show My Location</button>
        {/* <Patti /> */}

        <div id="maps"></div>
        
      </div>
    );
  }
}

export default App;












// import React, { Component } from 'react';
// import './App.css';
// import firebase from './Config/firebase'
// import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer, withScriptjs } from "react-google-maps"

// const provider = new firebase.auth.FacebookAuthProvider();

// class App extends Component {
//   constructor() {
//     super()
    
//     this.state = {
//       coords: {}
//     };

//     this.login = this.login.bind(this);
//     this.updateCoords = this.updateCoords.bind(this);
//     this.getDirections = this.getDirections.bind(this);
//   }

//   componentDidMount() {
//     this.setPosition();
//   }

//   login() {
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//       var user = result.user;
      
//     }).catch(function(error) {
      
//     });
//   }

//   setPosition() {
//     navigator.geolocation.getCurrentPosition(position => {
//       this.setState({coords: position.coords})
//     });
//   }

//   updateCoords({latitude, longitude}) {
//     this.setState({coords: {latitude, longitude}})
//   }

//   getDirections() {
//     const DirectionsService = new google.maps.DirectionsService();
   
//       DirectionsService.route({
//         origin: new google.maps.LatLng(24.8812296, 67.0727269),
//         destination: new google.maps.LatLng(24.8861479, 67.0595196),
//         travelMode: google.maps.TravelMode.DRIVING,
//       }, (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result,
//           });
//         } else {
//           alert("Sorry! Can't calculate directions!")
//         }
//       });
//   }

//   render() {
//     const {coords, directions} = this.state;
    
//     return(
//       <div>
//         {/* <button onClick={this.login}>Login with facebook shareef!</button> */}
//         <MyMapComponent 
//           isMarkerShown 
//           coords={coords}
//           googleMapURL="https://maps.googleapis.com/maps/api/js?key=<API_KEY_HERE>&v=3.exp&libraries=geometry,drawing,places"
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={<div style={{ height: `600px` }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//           directions={directions}
//           />

//           <button onClick={this.getDirections}><h1>Get Directions</h1></button>
//       </div>
//    )
//  }

// }

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={14}
//     center={{ lat: 24.8812296, lng: 67.0727269 }}
//   >

//   <Marker position={{ lat: 24.8812296, lng: 67.0727269 }} />
//   <Marker position={{ lat: 24.8861479, lng: 67.0595196 }} />

//   {props.directions && <DirectionsRenderer directions={props.directions} />}

//   </GoogleMap>
// ))

// export default App;
