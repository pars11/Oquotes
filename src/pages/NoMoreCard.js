import React , { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';

export default class NoMoreCards extends Component {
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

  const styles = StyleSheet.create({
    noMoreCardsText: {
      fontSize: 22,
      margin: 30
    }
  })