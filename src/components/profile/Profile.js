import React,{Component} from 'react';
import { View, Image, ImageBackground, StatusBar,Text,TouchableOpacity } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../../constants/styles';
import { AsyncStorage } from 'react-native';
import {Styles} from '../../assets/styles/profile';
import FooterScreen from '../common/Footer';
import {Container,Root,Footer,Button,Card,CardItem,Content,Thumbnail,Right,Left,Row,Body} from 'native-base';
import ProfileForm from './ProfileForm';
import { validation, moderateScale,fetchAPI,getUserAsync, } from '../../constants/functions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements'
import HeaderScreen from '../common/Header';
import SpinView from '../common/Spinner';

export default class Profile extends Component{

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed',
        isLoading:false
    };
    


    constructor(props){
        super(props)

        this.state = {
            selectedItems:[],
            preferences:undefined,
           
        };

        this.fetchHomeData();
    }

    async fetchHomeData(){
        const user = JSON.parse(await getUserAsync());
        
        const userData={user_id:user.id}
        await fetchAPI('POST',userData,'fetch-preference-data',this,'data')

        console.log('data',this.state.data)

        const franchises = this.state.data.response ? this.state.data.response.preferenceStore:[]

        let displayFranchise = [];
        if (franchises.length>0){
            for(let i = 0; i<franchises.length; i++){
                displayFranchise.push(
                    franchises[i].franchise
                ) 
            }

            this.setState({
                selectedItems:displayFranchise
            });
        }

        this.profilePreference(user.id)

    }

    async profilePreference(user_id){
        
        const userData={user_id}
        await fetchAPI('POST',userData,'profile-preference',this,'preferences')

        

        this.setState({
            isLoading:true,
        })

    }

    render(){

        let {isLoading,data,selectedItems}=this.state;
        
        let preference = true;
        
        
       
        if (!isLoading) {
            return <SpinView />;
        }

        let user = this.state.preferences.response.user;
        let preferences = this.state.preferences.response;

        if(data.success==0){
            preference=false;
        }
        console.log('us',selectedItems)

        
       
        return(           
            <Container>
                <HeaderScreen title="profile" navigation={this.props.navigation}/>
                <Content style={{backgroundColor:'#F0F0F0'}}>
                    <StatusBar backgroundColor={statusBarRed} barStyle="light-content" />    
                    <View style={Styles.Cover}>
                        <View>                    
                            <View style={Styles.HeaderContainer}>
                                <Image
                                source = {require('../../assets/images/noImageRed.jpg')}                         
                                style={Styles.ThumbNail}      
                                />
                                <Text style={Styles.MainHeaderText}>
                                    {user.name}
                                </Text>
                                <Text style={Styles.SubHeaderText}>{user.address}</Text>
                                <Text style={Styles.SubHeaderText}>{user.phone}</Text>
                            </View>
                            <View>
                                <View style={Styles.ForkCover}>
                                    <Image
                                        source = {require('../../assets/images/forkred.png')}                         
                                        style={{height:20,width:20,alignSelf:'center'}}      
                                    />
                                </View>    
                            </View>
                            
                            <Text style={Styles.ContentHeader}>Account Settings</Text>
                            <ProfileForm 
                            user={user}
                            preference = {preference}
                            preferenceData={data}
                            profilePreferences = {this.state.preferences.response}
                            selectedItems={selectedItems}

                            />
                            


                        </View>
                    </View>
                </Content>
                <FooterScreen navigation={this.props.navigation}/>
            </Container>
        )
    }
}