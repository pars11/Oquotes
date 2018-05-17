import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Logo from '../common/Logo';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Actions} from 'react-native-router-flux';

export default class Signup extends  Component {
    constructor(props) {
        super(props);

        this.state = ({
          email: '',
          password: '',
          showAlert: false,
          AlertMessage:''
        })
        
      }

    static navigationOptions = {
      drawerLabel: () => null
 }

 showAlert = (AlertMessage) => {
  this.setState({
    showAlert: true,
    AlertMessage:AlertMessage
  });
};

hideAlert = () => {
  this.setState({
    showAlert: false
  });
};

 onPress = (email,password,_this) => {
  const userEmail = this.state.email;
  const userPassword = this.state.password;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  try{
    if(userEmail == "" && userPassword == "")
    {
      this.showAlert("Please fill all inputs")
      return;
    }
    if (!filter.test(userEmail)) {
      this.showAlert("Please provide a valid email address")
      this.email.focus;
      return;
   }
    if(userPassword.length<6)
    {
      this.showAlert("Password: Please enter at least 6 characters")
      return;
    }

    else{
      fetch('http://192.168.74.1:80/Oquotes/register.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				email: userEmail,
				password: userPassword,
			})
			
		})
		.then((response) => response.json())
			.then((responseJson) =>{
        _this.email.clear();
        _this.password.clear();
        this.state.email = ""
        this.state.password = ""
        this.showAlert(responseJson);
			})
  }
}
  catch(error){
    var errorMessage = error;
    this.showAlert(errorMessage);
  }
}

	render() {
    var _this = this;
    const {showAlert} = this.state;
    var AlertMessage = this.state.AlertMessage;
		return(
      <View style={styles.container}>
      <Logo/>
      <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(email) => this.setState ({ email })}
              onSubmitEditing={()=> this.password.focus()}
              ref={(input) => this.email = input}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState ({ password })}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  
      <View>
              <TouchableOpacity style={styles.button} onPress={()=> this.onPress(this.state.email,this.state.password,_this)}>
              <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity> 
              </View>
              <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Oquotes"
          message={AlertMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#455a64"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
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
    paddingVertical:10,
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
  inputBox: {
    width:280,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 23,
    paddingHorizontal:10,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:280,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 10
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});