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
                  <View
          style={{
            height: 64,
            padding: 8,
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Image
            source={{ uri: this.props.authorphotoUrl }}
            style={styles.avatar}
          />
          <View
            style={
              {
                flex: 1,
                paddingTop: 4,
                paddingLeft: 16
              }
            }
          >
          <Text style={styles.authorName}>
              {this.props.author}
            </Text>
        </View>
        </View>
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
      },
      authorName: {
        paddingTop: 5,
        color: 'black',
        fontSize: 18
      },
      avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
      },
    })