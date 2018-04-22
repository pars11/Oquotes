import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import Logo from '../common/Logo';
import FBLoginView from '../common/FBLoginView';
import PropTypes from 'prop-types';
export default class Login extends  Component {
        constructor(props) {
            super(props);

            this.state = ({
              email: '',
              password: '',
              user: null,
            })
          }

    static navigationOptions = {
         drawerLabel: () => null
    }
    onPress = (email,password) => {
      const userEmail = this.state.email;
      const userPassword = this.state.password;
    
      try{
        if(userEmail == "" && userPassword == "")
        {
          alert("Please fill all inputs")
          return;
        }
        if(userPassword.length<6)
        {
          alert("Please enter at least 6 characters")
          return;
        }
    
        else{
          fetch('http://192.168.2.36:80/Oquotes/login.php', {
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
            alert(responseJson);
          })
      }
    }
      catch(error){
        var errorMessage = error;
          alert(errorMessage)
      }
    }
	render() {
    var _this = this;
    var user = this.state.user;

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
              <TouchableOpacity style={styles.button} onPress={()=> this.onPress(this.state.email,this.state.password)}>
              <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity> 
              </View>
              <View>
              <FBLogin
                buttonView={<FBLoginView />}
                ref={(fbLogin) => { this.fbLogin = fbLogin }}
                permissions={["email","user_friends"]}
                loginBehavior={FBLoginManager.LoginBehaviors.Native}
                onLogin={function(data){
                  alert("Logged in!");
                  console.log(data);
                  _this.setState({ user : data.credentials });
                  alert(_this.state.user.userId)
                }}
                onLogout={function(){
                  console.log("Logged out.");
                  _this.setState({ user : null });
                }}
                onLoginFound={function(data){
                  console.log("Existing login found.");
                  console.log(data);
                  _this.setState({ user : data.credentials });
                }}
                onLoginNotFound={function(){
                  _this.setState({ user : null });
                }}
                onError={function(data){
                  console.log("ERROR");
                }}
                onCancel={function(){
                  console.log("User cancelled.");
                }}
                onPermissionsMissing={function(data){
                  console.log("Check permissions!");
                }}
              />
              </View>
              <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('Signup')}><Text style={styles.signupButton}> Sign Up</Text></TouchableOpacity>
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