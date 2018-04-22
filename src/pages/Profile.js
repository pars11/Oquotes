import React, { Component } from 'react';
import {Icon} from 'native-base';
import {Image,StyleSheet,AsyncStorage,View,Text} from "react-native";
import CustomHeader from './CustomHeader';
import { Container} from 'native-base';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            userId: '',
            id: '',
            loginType: '',
          })
     }

     async componentWillMount() {
        const userGet = await AsyncStorage.getItem('user');
        if (userGet) {
            _user = JSON.parse(userGet)
          this.setState({ userId: _user.userId });
          this.setState({ id: _user.id });
          this.setState({ loginType: _user.loginType });
        } else {
          this.setState({ userId: false });
          this.setState({ id: false });
          this.setState({ loginType: false });
        }
      }

    static navigationOptions = ({ navigation }) => ({
        title: "Profile",
        headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.icon}
          />
        ),
    })

    render() {
    
        return(

            <Container>
        <CustomHeader title="Oquotes" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
            <View style={styles.container}>
            <Text style={styles.Text}>User ID</Text>
            <Text style={styles.Text}>{this.state.id}{this.state.userId}</Text>
            <Text style={styles.Text}>Login Type</Text>
            <Text style={styles.Text}>{this.state.loginType}</Text>
            </View>
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#FFFFFF',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
      },
      Text: {
          color:'#455a64',
          fontSize:24,
          textAlign: 'center'
      },
      icon: {
        width: 24,
        height: 24,
      }
    });

export default Profile;