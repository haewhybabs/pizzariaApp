import React,{Component} from 'react';
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
import axios from 'axios';
export default class OrderDetails extends Component{

    constructor(props){
        super(props)

        this.state={

            show:false,
            toppings:this.props.toppings,
            franchise:this.props.franchise,
            deliveryMethod:this.props.deliveryMethod,
            pizzaSize:this.props.pizzaSize,
            coupon:[],
            explore:[],
            sales:[]
            
        }
    }

    couponFetch=(type)=>{

        let inputData=null;
        let url =null;
        let company=this.state.franchise.fetchName;
        let {toppings,pizzaSize}=this.state;
        if(type=="coupon"){
            this.setState({
                show:'coupon'
            })
            url='https://pizzafeed.herokuapp.com/fetch';
            inputData={
                company,
                discountType:"COUPON",
                page:"",
                topping:toppings,
                size:pizzaSize
            }
        }
        else if(type=='explore'){
            this.setState({
                show:'explore'
            })

            url='https://pizzafeed.herokuapp.com/fetch/discount/company';
            inputData={
                company:"dominos",
                discountType:"COUPON",
            }
        }
        else if(type=='sales'){
            this.setState({
                show:'sales'
            })
            url='https://pizzafeed.herokuapp.com/fetch';
            inputData={
                company,
                discountType:"SALES AND OFFERS",
                page:"",
                topping:toppings,
                size:pizzaSize
            }
        }
        var self=this

        axios.post(url, inputData)
        .then(function (response) {
            if(response.data){
                self.setState({
                    [type]:response.data.response
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        

        
    }

    render(){
        let {show,pizzaSize,toppings,franchise,deliveryMethod,coupon,explore,sales} = this.state

        console.log('fr',explore)
        return(

            <View style={Styles.Cover}>
                <View style={Styles.ImageCover}>
                    <Image
                        source = {{uri:'https://www.pizzapizzaria.com/adminAssets/franchiseLogo/'+franchise.logo}}
                        style={{width:150, height:150}}      
                    />
                </View>
                        
                <View>
                    <Text style={Styles.TextHeader}>{franchise.name}</Text>

                    <View style={Styles.TabCover}>
                        <View style={Styles.TabContainer}>
                            <View>
                                <Text style={Styles.TabText} onPress={
                                    ()=>this.couponFetch('coupon')}>Preferred Coupon</Text>

                                {show=='coupon' &&(
                                    <View
                                        style={{
                                        borderBottomColor:primaryColor,
                                        borderBottomWidth: 2,
                                        width:120
                                        }}
                                    />
                                )}
                                
                            </View>

                            <View style={Styles.LineSeparator}/>

                            <View>

                                <Text style={{...Styles.TabText,paddingLeft:5}} onPress={
                                    ()=>this.couponFetch('explore')
                                }>Explore Coupons</Text>

                                {show=='explore' &&(
                                    <View
                                        style={{
                                        borderBottomColor:primaryColor,
                                        borderBottomWidth: 2,
                                        width:120
                                        }}
                                    />
                                )}
                            
                            </View>

                            <View style={Styles.LineSeparator}/>

                            <View>
                                <Text style={{...Styles.TabText,paddingLeft:5}} onPress={
                                    ()=>this.couponFetch('sales')
                                }>Sales and Deals</Text>

                                {show=='sales' &&(
                                    <View
                                        style={{
                                        borderBottomColor:primaryColor,
                                        borderBottomWidth: 2,
                                        width:120
                                        }}
                                    />
                                )}

                            </View>
                        </View>
                    </View>
                    {show =='coupon' &&(
                        <View>
                            <Text style={Styles.CouponMainHeader}>Coupons</Text>
                            <View
                                style={{
                                borderBottomColor:primaryColor,
                                borderBottomWidth: 2,
                                width:120
                                }}
                            />
                            {coupon.map((item,index)=>(

                            
                                <View style={{marginTop:10}}>
                                    <Text style={Styles.CouponHeader}>
                                        {item.discount}
                                    </Text>
                                    <Text style={Styles.MainCouponText}>
                                        {item.pizzaSummary}
                                    </Text>

                                    <View style={Styles.CouponButton}>
                                        <Text style={Styles.CouponButtonText}>
                                            Use this Coupon
                                        </Text>
                                        
                                    </View>
                                    <Text style={{fontWeight:'bold'}}>{item.couponCode}</Text>
                                </View>
                            ))}

                        </View>
                    )}

                    {show =='explore' &&(
                        <View>
                            <Text style={Styles.CouponMainHeader}>Explore Coupons</Text>
                            <View
                                style={{
                                borderBottomColor:primaryColor,
                                borderBottomWidth: 2,
                                width:185
                                }}
                            />
                            {explore.map((item,index)=>(
                                <View style={{marginTop:10}}>
                                    <Text style={Styles.CouponHeader}>
                                        {item.discount}
                                    </Text>
                                    <Text style={Styles.MainCouponText}>
                                        {item.pizzaSummary}
                                    </Text>

                                    <View style={Styles.CouponButton}>
                                        <Text style={Styles.CouponButtonText}>
                                            Use this Coupon
                                        </Text>
                                        
                                    </View>
                                    <Text style={{fontWeight:'bold'}}>{item.couponCode}</Text>
                                </View>
                            ))}

                        </View>
                    )}

                    {show =='sales' &&(
                        <View>
                            <Text style={Styles.CouponMainHeader}>Sales and Deals</Text>
                            <View
                                style={{
                                borderBottomColor:primaryColor,
                                borderBottomWidth: 2,
                                width:180
                                }}
                            />
                            {sales.map((item,index)=>(
                                <View style={{marginTop:10}}>
                                    <Text style={Styles.CouponHeader}>
                                        {item.discount}
                                    </Text>
                                    <Text style={Styles.MainCouponText}>
                                        {item.pizzaSummary}
                                    </Text>

                                    <View style={Styles.CouponButton}>
                                        <Text style={Styles.CouponButtonText}>
                                            Use this Coupon
                                        </Text>
                                        
                                    </View>
                                    <Text style={{fontWeight:'bold'}}>{item.couponCode}</Text>
                                </View>
                            ))}

                        </View>
                    )}
                    
                </View>
        
            </View>
        )
    }
}