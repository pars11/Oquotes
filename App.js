import React, { Component } from "react";
import {View,Text,StyleSheet,ScrollView,Image} from "react-native";
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import HomeScreen from "./src/pages/HomeScreen";
import EmailLoginScreen from "./src/pages/EmailLogin";
import SignupScreen from "./src/pages/Signup";
import LoginScreen from "./src/pages/LoginScreen";

export default class App extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <MyApp />
    )
  }

}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./src/assets/images/logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>

);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  LoginScreen: {
    screen: LoginScreen
  },
  EmailLogin: {
    screen: EmailLoginScreen
  },
  Signup: {
    screen: SignupScreen
  },
  Home: {
    screen: HomeScreen
  }
},
  {
    initialRouteName: 'LoginScreen',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: '#455a64'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})
