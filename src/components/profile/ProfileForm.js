import React,{Component} from 'react';
import { View, Image, ImageBackground, StatusBar,Text,TouchableOpacity } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../../constants/styles';
import { AsyncStorage } from 'react-native';
import {Styles} from '../../assets/styles/profile';
import FooterScreen from '../Footer';
import {Container,Root,Footer,Button,Card,CardItem,Content,Thumbnail,Right,Left,Row,Body,Header,Col} from 'native-base';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements'
import RadioButtonRN from 'radio-buttons-react-native';
export default class ProfileForm extends Component{

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    


    constructor(props){
        super(props)

        this.state = {
            selectedItems:[],
            checked:false
        };
    }
      

    
     
      onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };

    render(){
       let {selectedItems}=this.state

       let data = [
        {
          label: 'data 1'
         },
         {
          label: 'data 2'
         }
        ];

        let items = [{
            id: '92iijs7yta',
            name: 'Dominos',
          }, {
            id: 'a0s0a8ssbsd',
            name: 'PapaJohns',
          }, {
            id: '16hbajsabsd',
            name: 'PizzaHut',
          }
        ];
        return(           
            
            <View style={{marginTop:20}}>
                <Row>
                    <Col>

                        <Input
                            label="Full Name"
                            leftIcon={
                                <Icon
                                name='user'
                                size={20}
                                color={primaryColor}
                                />
                            }
                        />

                    </Col>

                    <Col>

                        <Input
                            label="Phone Number"
                            leftIcon={
                                <Icon
                                name='phone'
                                size={20}
                                color={primaryColor}
                                />
                            }
                        />

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Input
                            label="Country"
                            leftIcon={
                                <Icon
                                name='flag'
                                size={20}
                                color={primaryColor}
                                />
                            }
                        />

                    </Col>
                    <Col>
                        <Input
                            label="State"
                            leftIcon={
                                <Icon
                                name='home'
                                size={20}
                                color={primaryColor}
                                />
                            }
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Input
                            label="City"
                            leftIcon={
                                <Icon
                                name='home'
                                size={20}
                                color={primaryColor}
                                />
                            }
                        />
                    </Col>
                    <Col>
                        <Input
                            label="Zip Code"
                            leftIcon={
                                <Icon
                                name='file-archive-o'
                                size={20}
                                color={primaryColor}
                                />
                            }
                        />
                    </Col>
                </Row>

                <Input
                    label="Address"
                    leftIcon={
                        <Icon
                        name='map-marker'
                        size={20}
                        color={primaryColor}
                        />
                    }
                />

                <Row>
                    <Col>
                        <View>
                            <Text>Select Delivery Method</Text>
                            
                            <RadioButtonRN
                            data={data}
                            selectedBtn={(e) => console.log(e)}
                            activeColor={primaryColor}
                            />
                        </View>
                    </Col>

                    <Col>

                        <View>
                            <Text>Select Pizza Size</Text>
                            
                            <RadioButtonRN
                                data={data}
                                selectedBtn={(e) => console.log(e)}
                                activeColor={primaryColor}
                            />
                            
                        </View>
                    </Col>
                        
                </Row>
                
                

                <View style={{marginTop:10}}>
                    <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText="Select Pizza Franchise"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={ (text)=> console.log(text)}
                        altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#CCC"
                        submitButtonText="Submit"
                    />
                </View>

                

                

            </View>
        
        )
    }
}