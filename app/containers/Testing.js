import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { setUserId,  } from '../../redux/app-redux';
import firebase from 'react-native-firebase';


//Retreve the redux state
const mapStateToProps = (state) => {
  return {
    userId: state.userId
  };
}

//Send an action to the redux state
const mapDispatchToProps = (dispatch) => {
  return {
    setUserId: (text) => {dispatch(setUserId(text))},
  };
}


class Testing extends React.Component {

  //Get the current user info
  componentDidMount() {
      this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
          global.user = user
          this.authSubscription();
      });
  }

  constructor(props){
    super(props)
    this.onSetUserId = this.onSetUserId.bind(this);
  }

  //Call the dispatch to send user id
  onSetUserId = () => {
    this.props.setUserId(global.user.uid);
  }

  render(){
    return(
      <View>
        <Text>User id : {this.props.userId}</Text>
        <Button
        title='set UID'
        onPress={this.onSetUserId}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);
