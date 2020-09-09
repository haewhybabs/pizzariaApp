
import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar,Text,TouchableOpacity } from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../../constants/styles';
import { AsyncStorage } from 'react-native';
import {Container,Root,Footer,Button,Card,CardItem,Content,Thumbnail,Input,Icon,Right,Left} from 'native-base';
import {Styles} from '../../assets/styles/home';
import FooterScreen from '../Footer';

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
            <Container>
                <Content>
                    <View style={Styles.Cover}>
                        <StatusBar backgroundColor={statusBarRed} barStyle="light-content" />
                        <View style={Styles.Container}>
                            <View style={Styles.HeaderWrapper}>
                                <Text style={Styles.HeaderText}>Welcome Ayobami,</Text>

                                <View style={Styles.ThumbNailWrapper}>
                                    <Image
                                    source = {require('../../assets/images/noImageRed.png')}                         
                                    style={Styles.ThumbNail}      
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={Styles.SubHeaderText}>Today, July 18</Text>
                            </View>

                            <View style={Styles.CardContainer}>
                                <View style={{...Styles.CardWrapper,backgroundColor:'#F0FFFF',borderLeftColor:'#00B2EE'}}>
                                    <View style={Styles.DeliveryCardContainer}>
                                        <View style={Styles.DeliveryCardHeader}>
                                            <Text style={Styles.DeliveryTextHeader}>Delivery methods</Text>
                                            <View style={Styles.DeliveryIconWrapper}>
                                                <Image
                                                    source = {require('../../assets/images/delivery.png')}                         
                                                    style={Styles.DeliveryIcon}   
                                                /> 
                                            </View>
                                        </View>
                                        <Text style={Styles.DeliverySubText}>Pick up</Text>
                    
                                    </View>
                                </View>

                                <View style={{...Styles.CardWrapper,backgroundColor:'#FFF0F5',borderLeftColor:'#8B4500'}}>
                                    <View style={Styles.DeliveryCardContainer}>
                                        <View style={Styles.DeliveryCardHeader}>
                                            <Text style={Styles.DeliveryTextHeader}>Pizza Size</Text>
                                            <View style={Styles.DeliveryIconWrapper}>
                                                <Image
                                                    source = {require('../../assets/images/roundPizza.png')}                         
                                                    style={Styles.DeliveryIcon}   
                                                /> 
                                            </View>
                                        </View>
                                        <Text style={Styles.DeliverySubText}>Medium</Text>
                    
                                    </View>
                                </View>
                                <View style={{...Styles.CardWrapper,backgroundColor:'#FAEBD7',borderLeftColor:'#FF9912'}}>
                                    <View style={Styles.DeliveryCardContainer}>
                                        <View style={Styles.DeliveryCardHeader}>
                                            <Text style={Styles.DeliveryTextHeader}>Pizza Franchise</Text>
                                            <View style={Styles.DeliveryIconWrapper}>
                                                <Image
                                                    source = {require('../../assets/images/CompanyIcon.png')}                         
                                                    style={Styles.DeliveryIcon}   
                                                /> 
                                            </View>
                                        </View>
                                        <Text style={Styles.FranchiseSubText}>Dominos,PizzaHut,PapaJohns</Text>
                    
                                    </View>
                                </View>

                                <View style={Styles.OrderProceed} onPress={()=>this.props.navigation.navigate('Profile')}>
                                    <View style={Styles.OrderProceedContainer}>
                                        <Text style={Styles.OrderProceedText}>Proceed to order</Text>
                                    </View>
                                </View>
                            </View>
                            
                            
                        </View>
                        
                    </View>

                </Content>
                <FooterScreen/>
            </Container>    
            
        )

    }
}