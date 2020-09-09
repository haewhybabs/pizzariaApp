import React,{Component} from 'react';
import { View, Image, ImageBackground, StatusBar,Text,TouchableOpacity } from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../../constants/styles';
import { AsyncStorage } from 'react-native';
import {Styles} from '../../assets/styles/profile';
import FooterScreen from '../Footer';
import {Container,Root,Footer,Button,Card,CardItem,Content,Thumbnail,Input,Icon,Right,Left,Row} from 'native-base';

export default class Profile extends Component{

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };


    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={Styles.Cover}>
                <StatusBar backgroundColor={statusBarRed} barStyle="light-content" />
                <View>                    
                    <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon name='menu' style={{color:primaryColor}}/>
                    </Button>

                    <View style={Styles.HeaderContainer}>

                        <Row>
                            <Left style={{marginLeft:20}}>
                                <Text style={Styles.MainHeaderText}>Ayobami Babalola</Text>
                                <Text style={Styles.SubHeaderText}>Obafemi Awolowo University</Text>
                                <Text style={Styles.SubHeaderText}>+234 81 299 0490</Text>
                            </Left>
                            <Right>
                                <View>
                                    <Image
                                    source = {require('../../assets/images/noImageRed.png')}                         
                                    style={Styles.ThumbNail}      
                                    />
                                </View>
                            </Right>
                        </Row>
                    </View>
                
                    
                </View>
            </View>
        )
    }
}