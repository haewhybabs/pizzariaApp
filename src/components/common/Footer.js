import React,{Component} from 'react';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../../constants/styles';
import { 
  StyleSheet,
  View,
  Text
   } from 'react-native';

import{Button,Icon,Footer,FooterTab
} from 'native-base';




class FooterScreen extends Component{
    
    constructor(){
        super()

        this.state = {
            dataSource:[],
            isLoading:true,
           
        }
  
       
    }

    DashboardHandler = () =>{
        this.props.navigation.navigate('Dashboard');
    }
    
   

    ProfileHandler = () =>{
        this.props.navigation.navigate('Profile');
    }

    // componentWillMount() {
        
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }

    // componentWillUnmount() {
        
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }

    // handleBackButtonClick() {
        
    //     this.props.navigation.navigate('Dashboard')
        
    //     return true;
    // }

    render(){
        return(
            <Footer>
                <FooterTab  style={{backgroundColor:primaryBlack}}>
                    <Button vertical onPress={()=>this.props.navigation.navigate('Home')}>
                        <Icon name="apps" style={{color:'#fff'}}/>
                        <Text style={{color:'#fff'}}>Home</Text>
                    </Button>
                    <Button vertical onPress={()=>this.props.navigation.navigate('Order')}>
                        <Icon active name="md-create" style={{color:'#fff'}}/>
                        <Text style={{color:'#fff'}}>Order</Text>
                    </Button>

                    <Button vertical onPress={()=>this.props.navigation.navigate('Profile')}>
                        <Icon active name="navigate" style={{color:'#fff'}} />
                        <Text style={{color:'#fff'}}>Profile</Text>
                    </Button>
                    
                </FooterTab>
            </Footer>
        );
    }
}

export default FooterScreen;;