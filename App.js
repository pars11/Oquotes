import React , { Component } from 'react';
import {StyleSheet, View,Dimensions,Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export const MARGINX = 0.06
export const MARGINY = 0.2

const { width, height } = Dimensions.get('window');

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>Author : {this.props.author}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more quote</Text>
      </View>
    )
  }
}

const cards = [
  {id: '1', author: 'Sherlock Holmes', image:'https://i.hizliresim.com/Z9R9pz.png'},
  {id: '2', author:'Steve Jobs', image: 'https://i.hizliresim.com/3EJEkA.jpg'},
  {id: '3', author:'Aristotle', image: 'https://i.hizliresim.com/2J4JAA.jpg'},
  {id: '4', author:'Mustafa Kemal Atatürk', image: 'https://i.hizliresim.com/Md4DW6.png'},
  {id: '5', author:'Wayne Mustaffa', image: 'https://i.hizliresim.com/vj7P4R.jpg'},
  {id: '6', author:'Unknown', image: 'https://i.hizliresim.com/EPMDyZ.jpg'}
]

export default class App extends React.Component {
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


  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Oquotes</Title>
        </Body>
        <Right />
      </Header>
      <Content>
      <SwipeCards
        cards={this.state.cards}
        loop={false}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={false}
        showNope={false}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
            </Content>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    margin: 30
  },
  thumbnail: {
    width: 300,
    height: 300,
    width: width * (1.0 - MARGINX * 2),
    height: height * (1.0 - MARGINY * 2.1),
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCardsText: {
    fontSize: 22,
    margin: 30
  }
})