/**
 * Pizzapizzaria App
 * Developed By: Ayobami Babalola.
 * https://github.com/haewhydev/pizzariaApp
 */

import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar,Text,TouchableOpacity} from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import {Styles} from '../../assets/styles/order';
import {Container,Root,Footer,Button,Card,CardItem,Content,Thumbnail,Input,Icon,Right,Left} from 'native-base';
import { statusBarBlack,primaryColor } from '../../constants/styles';
import AsyncStorage from '@react-native-community/async-storage';
import FooterScreen from '../Footer';
import HeaderScreen from '../Header';
import { Header } from 'react-native/Libraries/NewAppScreen';
export default class Order extends Component {
   
  constructor(props) {
    super(props); 
  }
  

  render() {
    return (
        
            <Container>
              <HeaderScreen title="Order" navigation={this.props.navigation} />
                <Content>
                  <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
                  <View style={Styles.Cover}>
                    <View style={Styles.ImageCover}>
                      <Image
                          source = {require('../../assets/images/dominos.jpg')}
                          style={{width:150, height:150}}      
                      />
                    </View>
                        
                    <View>
                      <Text style={Styles.TextHeader}>Dominos</Text>

                      <View style={Styles.TabCover}>
                        <View style={Styles.TabContainer}>
                          <Text style={Styles.TabText}>Preferred Coupon</Text>

                          <View style={Styles.LineSeparator}/>

                          <Text style={{...Styles.TabText,paddingLeft:5}}>Explore Coupons</Text>

                          <View style={Styles.LineSeparator}/>
                          <Text style={{...Styles.TabText,paddingLeft:5}}>Sales and Deals</Text>
                        </View>
                      </View>

                      <View>
                        <Text style={Styles.CouponMainHeader}>Coupons</Text>
                        <View
                          style={{
                            borderBottomColor:primaryColor,
                            borderBottomWidth: 2,
                            width:120
                          }}
                        />

                        <View style={{marginTop:10}}>
                          <Text style={Styles.CouponHeader}>
                            Carryout Only: Medium 3-Topping Handmade Pan Pizzas for $7.99
                          </Text>
                          <Text style={Styles.MainCouponText}>
                          Carryout only! Get a medium 3-topping handmade 
                          pan pizzas for $7.99 when you apply this Dominos Pizza coupon 
                          code at checkout.
                          </Text>

                          <View style={Styles.CouponButton}>
                            <Text style={Styles.CouponButtonText}>
                              Use this Coupon
                            </Text>
                            
                          </View>
                          <Text style={{fontWeight:'bold'}}>903930</Text>
                        </View>

                        <View style={{marginTop:10}}>
                          <Text style={Styles.CouponHeader}>
                            Carryout Only: Medium 3-Topping Handmade Pan Pizzas for $7.99
                          </Text>
                          <Text style={Styles.MainCouponText}>
                          Carryout only! Get a medium 3-topping handmade 
                          pan pizzas for $7.99 when you apply this Dominos Pizza coupon 
                          code at checkout.
                          </Text>

                          <View style={Styles.CouponButton}>
                            <Text style={Styles.CouponButtonText}>
                              Use this Coupon
                            </Text>
                            
                          </View>
                          <Text style={{fontWeight:'bold'}}>903930</Text>
                        </View>


                      </View>
                    </View>
                  </View>
                </Content>
                
            </Container>
    );
  }
}

Order.propTypes = {
  navigation: PropTypes.object.isRequired
};