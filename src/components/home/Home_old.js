
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
            <View style={Styles.Cover}>
              <StatusBar backgroundColor={statusBarRed} barStyle="light-content" />

              <Container>
                <Content>
                  <View style={Styles.homeHeader}>                    
                    <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon name='menu' style={{color:'#fff'}}/>
                    </Button>
                
                    <View style={{width:'100%',alignItems:'center',marginTop:20}}>
                      <Thumbnail
                          source = {require('../../assets/images/noImage.png')}
                          scaleX={2} scaleY={2}
                          style={{width:50, height:50, borderRadius:50/2}}      
                      />
                      <TouchableOpacity onPress={()=>this.selectPhoto()}>
                          <Text style={{marginTop:40,color:'#fff',fontSize:20}}>Change Profile Picture</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{marginTop:20,width:'100%',alignItems:'center'}}> 
                      <Text style={{fontSize:18}}>Profile Information</Text>
                  </View>

                  <TouchableOpacity>

                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon active name="person" style={{color:primaryColor}} />
                            <Text>User Information</Text>
                            <Right>
                                <Icon name="arrow-forward" style={{color:primaryBlack}}/>
                            </Right>
                        </CardItem>
                    </Card>
                  </TouchableOpacity>


                  <TouchableOpacity>

                    <Card>
                        <CardItem>
                            <Icon active name="home" style={{color:primaryColor}}/>
                            <Text>Order Information</Text>
                            <Right>
                                <Icon name="arrow-forward" style={{color:primaryBlack}} />
                            </Right>
                        </CardItem>
                    </Card>
                  </TouchableOpacity>


                  <View style={{marginTop:50,marginLeft:10,marginRight:10}}>
                      <Button rounded primary onPress={()=>this.props.navigation.navigate('Order')} style={{width:'100%',backgroundColor:primaryColor}}>
                          <Text style={{width: '100%',textAlign: 'center',color:'#fff',fontSize:20}}>Order Now</Text>
                      </Button>
                  </View>
                      
                </Content>
                <FooterScreen/>

              </Container>
                
                
            </View>
        );
    }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired
};