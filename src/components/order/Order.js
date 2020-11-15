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
import FooterScreen from '../common/Footer';
import HeaderScreen from '../common/Header';
import { Header } from 'react-native/Libraries/NewAppScreen';
import OrderDetails from './OrderDetails';
import { validation, moderateScale,fetchAPI,getUserAsync, } from '../../constants/functions';

export default class Order extends Component {
   
  constructor(props) {
    super(props); 

    this.state={
      toppings:undefined,
      pizzaSize:undefined,
      franchises:[],
      deliveryMethod:undefined,
      isLoading:false
    }
    this.fetchHomeData();
  }
  

  async fetchHomeData(){
    const user = JSON.parse(await getUserAsync());
    
    const userData={user_id:user.id}
    await fetchAPI('POST',userData,'fetch-preference-data',this,'data')
    let response =this.state.data.response;

    console.log('data',this.state.data)

    const franchises = this.state.data.response ? this.state.data.response.preferenceStore:[]

    this.setState({
      toppings: response? response.preference.toppings:null,
      franchises,
      pizzaSize:response? response.preference.pizzaSize:null,
      deliveryMethod:response?response.preference.delivery_method:null,
      isLoading:true
    })

    
}
  

  render() {
    let isLoading=this.state.isLoading;

    if (!isLoading) {
      return <SpinView />;
    }

    let {franchises,toppings,deliveryMethod,pizzaSize} = this.state;
    console.log('test',toppings,pizzaSize)

    return (
        
      <Container>
        <HeaderScreen title="Order" navigation={this.props.navigation} />
          <Content>
            <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
            <View style={{marginBottom:10}}>
              {franchises.map((item,index)=>(
                <OrderDetails 
                  toppings={toppings}
                  pizzaSize={pizzaSize}
                  franchise={item}
                  deliveryMethod={deliveryMethod}
                  key={index}
                />
              ))}
            </View>
            
          </Content>
          <FooterScreen navigation={this.props.navigation}/>
      </Container>
    );
  }
}

Order.propTypes = {
  navigation: PropTypes.object.isRequired
};