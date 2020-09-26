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
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements'
import HeaderScreen from '../common/Header';

export default class Profile extends Component{

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    


    constructor(props){
        super(props)

        this.state = {
            selectedItems:[]
        };
    }

    render(){
       
        return(           
            <Container>
                <HeaderScreen title="profile" navigation={this.props.navigation}/>
                <Content style={{backgroundColor:'#F0F0F0'}}>
                    <StatusBar backgroundColor={statusBarRed} barStyle="light-content" />    
                    <View style={Styles.Cover}>
                        <View>                    
                            <View style={Styles.HeaderContainer}>
                                <Image
                                source = {require('../../assets/images/noImageRed.png')}                         
                                style={Styles.ThumbNail}      
                                />
                                <Text style={Styles.MainHeaderText}>
                                    Ayobami Babalola
                                </Text>
                                <Text style={Styles.SubHeaderText}>Obafemi Awolowo University</Text>
                                <Text style={Styles.SubHeaderText}>+2348167356839</Text>
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
                            <ProfileForm />
                            


                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}