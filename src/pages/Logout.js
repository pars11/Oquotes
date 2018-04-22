import React, { Component } from 'react';
import {Icon} from 'native-base';
import {Image,StyleSheet,AsyncStorage} from "react-native";

class Logout extends Component {
    constructor(props) {
        super(props);
     }

    render() {
        var _this = this;
        _this.setState({ user : null });
        return(
        _this.props.navigation.navigate('Login')
    )
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Logout",
        headerLeft: <Icon name="sign-out" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Logout',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/images/logout.png')}
            style={styles.icon}
          />
        ),
      })
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
export default Logout;