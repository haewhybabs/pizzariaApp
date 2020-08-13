
import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar,Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import {Styles} from '../../assets/styles/login';
import { statusBarRed } from '../../constants/styles';
import { AsyncStorage } from 'react-native';
import LoginForm from './LoginForm';
import { Content } from 'native-base';
import NetInfo from '@react-native-community/netinfo';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    


    constructor(props) {
        super(props);

        this.state = {
            NetConnected: true,
            signInPressed: false,
        };
      

    }

    UNSAFE_componentWillMount() {
        NetInfo.isConnected.fetch().then(isConnected => {
          if (isConnected) this.setState({ NetConnected: true });
          else this.setState({ NetConnected: false });
        });
        function handleFirstConnectivityChange(isConnected) {
          if (isConnected) this.setState({ NetConnected: true });
          else this.setState({ NetConnected: false });
        }
        NetInfo.isConnected.addEventListener(
          'connectionChange',
          handleFirstConnectivityChange.bind(this)
        );
    }

    
    

    render() {
        const { visibleSnackBar1, NetConnected, signInPressed } = this.state;
        return (
            <View style={Styles.Cover}>
                <StatusBar backgroundColor={statusBarRed} barStyle="light-content" />
                
                {NetConnected && !signInPressed && (
                    <View style={{ flex: 1 }}>
                        <LoginForm/>
                    </View>
                )}
        {signInPressed && (
          <View style={Styles.container}>
            <Spinner isVisible size={100} type='Bounce' color='#0fc9ff' />
          </View>
        )}
        {!NetConnected && (
          <Content
            contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          >
            <View style={Styles.imageView}>
              <Image
                style={Styles.image}
                source={require('../../assets/images/pizza.png')}
              />
            </View>
            <View style={Styles.alertCard}>
              <Text style={Styles.alertCardText}>
                You have no data connection available on your phone. Please
                connect to WiFi or Mobile Data.
              </Text>
            </View>
            <View style={{ marginTop: 30 }} />
          </Content>
        )}
            </View>
        );
    }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired
};