import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../common/Logo';
import Form from '../common/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends  Component {
    constructor(props) {
        super(props);
      }

      goBack() {
        Actions.pop()
    }

    static navigationOptions = {
      drawerLabel: () => null
 }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});