import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBv9o67FU4AYrvn7zX3rO4vbH-8nnKdFos",
  authDomain: "oquotes-5b387.firebaseapp.com",
  databaseURL: "https://oquotes-5b387.firebaseio.com",
  projectId: "oquotes-5b387",
  storageBucket: "oquotes-5b387.appspot.com",
  messagingSenderId: "827840370945"
};

firebase.initializeApp(firebaseConfig);

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      password: ''
    })
  }

  onPress = (email,password) => {
    if(this.props.type == "Login"){
      try{
        if(this.state.email == "" && this.state.password == "")
        {
          alert("Please fill all inputs")
          return;
        }
        if(this.state.password.length<6)
        {
          alert("Please enter your password")
          return;
        }

        else{
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage)
      });
    }
  }
  catch(error){
    var errorMessage = error.message;
      alert(errorMessage)
  }
  }
    else if (this.props.type == "Signup"){
      try{
        if(this.state.email == "" && this.state.password == "")
        {
          alert("Please fill all inputs")
          return;
        }
        if(this.state.password.length<6)
        {
          alert("Please enter at least 6 characters")
          return;
        }

        else{
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          var errorMessage = error.message;
          alert(errorMessage)
        });
      }
    }
      catch(error){
        var errorMessage = error.message;
          alert(errorMessage)
      }
    }
  }

	render(){
		return(
			<View style={styles.container}>
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
           <TouchableOpacity style={styles.button} onPress={()=> this.onPress(this.state.email,this.state.password)}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
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