import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
var Icon = require('react-native-vector-icons/FontAwesome');

/**
  Example FBLoginView class
  Please note:
  - this is not meant to be a full example but highlights what you have access to
  - If you use a touchable component, you will need to set the onPress event like below
**/
class FBLoginView extends Component {
  static contextTypes = {
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func,
    props: PropTypes.shape({})
	};

  constructor(props) {
      super(props);
    }

    render(){
        return (
          <View style={[]}>
            <Icon.Button onPress={() => {
                if(!this.context.isLoggedIn){
                  this.context.login()
                }else{
                  this.context.logout()
                }

              }}>
                <Text  style={styles.Button}> Login with Facebook</Text>

            </Icon.Button>
          </View>
      )
    }
}
module.exports = FBLoginView;

const styles = StyleSheet.create({
  Button : {
    color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});