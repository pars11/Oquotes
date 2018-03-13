import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import SwipeCards from 'react-native-swipe-cards';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import CustomHeader from './CustomHeader';
import Card from "./Card";
import NoMoreCard from "./NoMoreCard";

const cards = [
    {id: '1', author: 'Sherlock Holmes', image:'https://i.hizliresim.com/Z9R9pz.png'},
    {id: '2', author:'Steve Jobs', image: 'https://i.hizliresim.com/3EJEkA.jpg'},
    {id: '3', author:'Aristotle', image: 'https://i.hizliresim.com/2J4JAA.jpg'},
    {id: '4', author:'Mustafa Kemal Atatürk', image: 'https://i.hizliresim.com/Md4DW6.png'},
    {id: '5', author:'Wayne Mustaffa', image: 'https://i.hizliresim.com/vj7P4R.jpg'},
    {id: '6', author:'Unknown', image: 'https://i.hizliresim.com/EPMDyZ.jpg'}
  ]
  
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: cards,
          outOfCards: false
        }
      }
    
      handleYup (card) {
        console.log("Yes")
      }
    
      handleNope (card) {
        console.log("Nope")
      }
    
      cardRemoved (index) {
        console.log(`The index is ${index} card removed`);
          }

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/home.png')}
        style={styles.icon}
      />
    ),
  })

  render() {

    return (
      <Container>
        <CustomHeader title="Oquotes" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <SwipeCards
        cards={this.state.cards}
        loop={false}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={false}
        showNope={false}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}/>
            </Content>
      </Container>
    )
  }

}

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});