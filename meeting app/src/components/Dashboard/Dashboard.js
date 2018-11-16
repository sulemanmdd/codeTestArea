import React, { Component } from "react";
import "../../App.css";
import * as firebase from 'firebase';
import swal from 'sweetalert';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: ""
    }
  }

  componentWillMount() {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: true, uid: user.uid });
        localStorage.setItem('uid', user.uid);
      } else {
        this.setState({ user: false });
      }
    });

  }

  componentDidUpdate() {
    const db = firebase.firestore();
    const { uid } = this.state;
    debugger

    db.collection('users').where('uid', '==', uid).get().then(querySnapshot => {

      if (!querySnapshot.size) {
        this.props.history.push('/');
      }

    })
  }

  render() {
    return (
      <div className="container">
          <div className="card mt-5">
            <div className="card-body">
              
              
            </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
