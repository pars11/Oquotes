import React , { Component } from 'react';
import {Text, View,StyleSheet,Dimensions,Image} from 'react-native';

const { width, height } = Dimensions.get('window');

export const MARGINX = 0.06
export const MARGINY = 0.2

export default class Card extends Component {
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
      }
    })