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
import NoMoreCards from "./NoMoreCards";

const cards = [
    {id: '1', author: 'Sherlock Holmes', image:'https://i.hizliresim.com/Z9R9pz.png' , authorphotoUrl: 'https://www.planetclaire.tv/wp-content/uploads/2010/07/sherlock-sherlock-holmes-season-1.jpg'},
    {id: '2', author:'Steve Jobs', image: 'https://i.hizliresim.com/3EJEkA.jpg', authorphotoUrl: 'http://4827-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2011/04/Steve-Jobs-Apple-CEO-150x150.jpg'},
    {id: '3', author:'Aristotle', image: 'https://i.hizliresim.com/2J4JAA.jpg', authorphotoUrl: 'http://www.liveyourmagic.com/wp-content/uploads/2014/01/Aristotle_Color-879x1024.jpg'},
    {id: '4', author:'Mustafa Kemal Atatürk', image: 'https://i.hizliresim.com/Md4DW6.png', authorphotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQLC5y59xcBRidJkZ_NZ-OlixeeaG5XsBeJzJyGd5ixJwAnJA'},
    {id: '5', author:'Wayne Mustaffa', image: 'https://i.hizliresim.com/vj7P4R.jpg' , authorphotoUrl: 'https://images-na.ssl-images-amazon.com/images/I/51JerdoMwBL._UY250_.jpg'},
    {id: '6', author:'Unknown', image: 'https://i.hizliresim.com/EPMDyZ.jpg' , authorphotoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/852726308060508601/5C10B187F846773F8C8EE103C4D31778A192D39B/'}
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