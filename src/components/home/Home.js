
import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar,Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import {Styles} from '../../assets/styles/splash';
import { statusBarBlack } from '../../constants/styles';
import { AsyncStorage } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed'
  };


    constructor(props) {
        super(props);

        
    }
 
    render() {
        return (
            <View style={Styles.Cover}>
                <StatusBar backgroundColor={statusBarBlack} barStyle="light-content" />
                
                <Text>Home</Text>
            </View>
        );
    }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired
};