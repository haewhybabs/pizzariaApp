/**
 * Pizzapizzaria App
 * Developed By: Ayobami Babalola.
 * https://github.com/haewhydev/pizzariaApp
 */

import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar,Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import {Styles} from '../assets/styles/splash';
import { statusBarBlack } from '../constants/styles';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed'
  };

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('user');
    if (userToken) {
      const user = JSON.parse(userToken);
    }
    setTimeout(() => {
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      // this.props.navigation.navigate('Auth');
    }, 2500);
  };

  render() {
    return (
        <View style={Styles.Cover}>
            <StatusBar backgroundColor={statusBarBlack} barStyle="light-content" />
            
            <View style={Styles.Container}>
              <View style={Styles.Header}>

                <Text style={Styles.HeaderText}>HOME OF</Text>
                <Text style={Styles.HeaderText}>PIZZA AND</Text>
                <Text style={Styles.HeaderText}>ONLY PIZZA</Text>


                <View style={Styles.SubHeaderTextContainer}>
                  <Text style={Styles.SubHeaderText}>Order Eat-In, Delivery and Take-Out</Text>
                  <Text style={Styles.SubHeaderText}>Choose and Enjoy your Favourite Pizza</Text>                  
                </View>  

                <View style={Styles.ImageCover}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/cooking_liz.png')}
                    style={Styles.SplashImage}
                  />
                </View>              
              </View>
              

              
            </View>

            {/*<View style={Styles.splashScreenContainer}>
                <Spinner isVisible size={50} type="ThreeBounce" color="white" />
            </View>*/}
        </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.object.isRequired
};