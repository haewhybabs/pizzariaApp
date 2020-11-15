
import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar,Text,TouchableOpacity } from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../../constants/styles';
import { AsyncStorage } from 'react-native';
import {Container,Root,Footer,Button,Card,CardItem,Content,Thumbnail,Input,Icon,Right,Left} from 'native-base';
import {Styles} from '../../assets/styles/home';
import FooterScreen from '../common/Footer';
import SpinView from '../common/Spinner';
import { validation, moderateScale,fetchAPI,getUserAsync, } from '../../constants/functions';
import { monthNames } from '../../constants/strings';
import HeaderScreen from '../common/Header';
export default class Home extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed'
};


    constructor(props) {
        super(props);

        this.state={
            data:undefined,
            isLoading:false

        }

        this.fetchHomeData();
    }


    async fetchHomeData(){
        const user = JSON.parse(await getUserAsync());
        const userData={user_id:user.id}
        
        await fetchAPI('POST',userData,'fetch-preference-data',this,'data')

        console.log('data',this.state.data)

        this.setState({
            isLoading:true,
            user:user
        })

    }

    
 
    render() {
        let {isLoading,data,user}=this.state;


        

        if (!isLoading) {
            return <SpinView />;
        }

        console.log('da',data)

        let details=null;
        
        let displayStore=[];
        if (data.response){
            let stores=data.response.preferenceStore;
            details=data.response.preference
            

            for(let i=0; i<stores.length;i++){
                displayStore.push(
                    stores[i].name,' , '
                )
            }
        }

        
        const d = new Date();
        const todayDate = monthNames[d.getMonth()] + ' '+ d.getDate();
        
        return (
            <Container>
            <HeaderScreen title="Home" navigation={this.props.navigation}/>
                <Content>
                <StatusBar backgroundColor={statusBarRed} barStyle="light-content" /> 
                    <View style={Styles.Cover}>
                        <StatusBar backgroundColor={statusBarRed} barStyle="light-content" />
                        <View style={Styles.Container}>
                            <View style={Styles.HeaderWrapper}>
                                <Text style={Styles.HeaderText}>Welcome {user.name},</Text>

                                <View style={Styles.ThumbNailWrapper}>
                                    <Image
                                    source = {require('../../assets/images/noImageRed.jpg')}                         
                                    style={Styles.ThumbNail}      
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={Styles.SubHeaderText}>Today, {todayDate}</Text>
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
                                        <Text style={Styles.DeliverySubText}>{details?
                                        details.delivery_method: 'nill'}</Text>
                    
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
                                        <Text style={Styles.DeliverySubText}>{details?
                                        details.pizzaSize: 'nill'}</Text>
                    
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
                                        <Text style={Styles.FranchiseSubText}>{displayStore}</Text>
                    
                                    </View>
                                </View>

                                <TouchableOpacity style={Styles.OrderProceed} onPress={()=>this.props.navigation.navigate('Order')}>
                                    <View style={Styles.OrderProceedContainer}>
                                        <Text style={Styles.OrderProceedText}>Proceed to order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                        
                    </View>

                </Content>
                <FooterScreen navigation={this.props.navigation}/>
            </Container>    
            
        )

    }
}