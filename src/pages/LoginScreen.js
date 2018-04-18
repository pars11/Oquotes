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

export default class Login extends  Component {
        constructor(props) {
            super(props);
          }

    static navigationOptions = {
         drawerLabel: () => null
    }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<View style={styles.signupTextCont}>
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('EmailLogin')}>
                <Text style={styles.buttonText}>Login with Email</Text>
                </TouchableOpacity> 
                </View>
                <View>
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('EmailLogin')}>
                <Text style={styles.buttonText}>Login with Facebook</Text>
                </TouchableOpacity> 
                </View>
                <View>
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('EmailLogin')}>
                <Text style={styles.buttonText}>Login with Twitter</Text>
                </TouchableOpacity> 
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
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});