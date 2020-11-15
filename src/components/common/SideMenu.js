import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  ToastAndroid,
  Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';


import Styles from '../../assets/styles/sidemenu';
import {
  moderateScale,
  logout,
  getUserAsync
} from '../../constants/functions';
import {
  primaryColor,
  textColor,
  version,
  primaryBlack
} from '../../constants/styles';

const { width } = Dimensions.get('window');

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0
    };

    this.fetchUser();
  }

  async fetchUser() {
    const user = JSON.parse(await getUserAsync());
    console.log(user);
    this.setState(
      {
        user: user,
        _id: user._id,
      },
      () => this.setState({ isLoaded: true })
    );
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { item, profile, isLoaded,user } = this.state;

    var path = require('../../assets/drawer/avatar.png');
    if (profile && profile.gender === 'female') {
      path = require('../../assets/drawer/female_avatar.png');
    }

    return (
      <View style={Styles.container}>
        <ScrollView>
          <View>
            {/* <Image
              resizeMode="contain"
              source={require('../../assets/images/logo_black.png')}
              style={{ width: '100%', height: width * 0.15,margin:10 }}
            /> */}
          </View>
          <View style={Styles.profileSectionContainer}>
            {/* <Image
              source={require('../../assets/drawer/avatar.png')}
              style={{ width: moderateScale(45), height: moderateScale(45) }}
            /> */}
            {profile && (
              <View style={{ paddingLeft: 10, justifyContent: 'space-evenly' }}>
                <Text style={Styles.profileNameText}>{profile.name}</Text>
                <Text style={Styles.profileEmailText}>{user.username}</Text>
              </View>
            )}
          </View>
          <View style={Styles.horizontalLine} />

          <View>
            <View style={Styles.navSectionStyle}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ item: 0 });
                  this.props.navigation.navigate('Home');
                }}
              >
                <View style={Styles.navItemStyle}>
                  <Icon name="home" type="entypo" size={moderateScale(23)} />
                  <Text style={[Styles.navTextStyle]}>Home</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({ item: 0 });
                  this.props.navigation.navigate('Order');
                }}
              >
                <View style={Styles.navItemStyle}>
                  <Icon name="first-order" size={30} color={primaryBlack} />
                  <Text style={[Styles.navTextStyle]}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({ item: 1 });
                  this.props.navigation.navigate('Profile');
                }}
              >
                <View style={[Styles.navItemStyle, { paddingTop: 30 }]}>
                  <Icon name="user" size={30} color={primaryBlack} />
                  <Text style={[Styles.navTextStyle]}>Profile</Text>
                </View>
              </TouchableOpacity>

              

              <View style={[Styles.horizontalLine, {marginTop: 20}]} />

              <TouchableOpacity
                onPress={() => {
                  console.log('signout pressed');
                  Alert.alert('Sign Out', 'Are you sure?', [
                    { text: 'No', style: 'cancel' },
                    {
                      text: 'Yes',
                      onPress: () => 
                        {
                        
                          logout();
                          this.props.navigation.navigate('Login');
                          ToastAndroid.show(
                            'You have logged out successfuly!',
                            ToastAndroid.LONG
                          );
                        
                        }
                    }
                  ]);
                }}
                // style={{ position: 'absolute', bottom: 20 }}
              >
                <View style={[Styles.navItemStyle, { paddingTop: 20 }]}>
                  <Icon name="sign-out" size={30} color={primaryBlack} />
                  <Text style={Styles.navTextStyle}>Log Out</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SideMenu;
