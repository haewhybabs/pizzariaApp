import React,{Component} from 'react';
import {Text,TouchableOpacity } from 'react-native';
import { primaryColor } from '../../constants/styles';

import {Button,Left,Body,Header} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderScreen extends Component{

   

    render(){
       
        return(           
            
            <Header style={{backgroundColor:primaryColor}}>
                <Left>
                    <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                    <Icon
                        name="bars"
                        size={30}
                        color='white'
                    />
                    </Button>                
                </Left>
                <Body>
                    <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>{this.props.title}</Text>
                </Body>
                
            </Header>
        )

    }
}