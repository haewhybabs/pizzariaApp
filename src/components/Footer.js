import React,{Component} from 'react';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../constants/styles';
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
    
    LoansHandler = () =>{
        this.props.navigation.navigate('Loans');
    }

    LoanHistoryHandler = () =>{
        this.props.navigation.navigate('History');
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
                <FooterTab  style={{backgroundColor:'#F7F7F7'}}>
                    <Button vertical>
                        <Icon name="apps" style={{color:primaryColor}}/>
                        <Text style={{color:primaryColor}}>Home</Text>
                    </Button>
                    <Button vertical >
                        <Icon active name="md-create" style={{color:primaryColor}}/>
                        <Text style={{color:primaryColor}}>Order</Text>
                    </Button>

                    <Button vertical >
                        <Icon active name="navigate" style={{color:primaryColor}} />
                        <Text style={{color:primaryColor}}>Sign Out</Text>
                    </Button>
                    
                </FooterTab>
            </Footer>
        );
    }
}

export default FooterScreen;;