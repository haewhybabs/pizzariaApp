import React,{Component} from 'react';
import { View, Image, ImageBackground, StatusBar,Text,TouchableOpacity,ToastAndroid } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { statusBarBlack,statusBarRed, primaryColorRed, primaryBlack, primaryColor } from '../../constants/styles';
import { AsyncStorage } from 'react-native';
import {Styles} from '../../assets/styles/profile';
import FooterScreen from '../common/Footer';
import { validation, moderateScale,fetchAPI,getUserAsync, } from '../../constants/functions';
import {Container,Root,Footer,Button,Card,CardItem,Content,Thumbnail,Right,Left,Row,Body,Header,Col} from 'native-base';
import { CheckBox,Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ProfileForm extends Component{

    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    


    constructor(props){
        super(props)
        const {user,preferenceData,preference,selectedItems}=props;
        const userPreference = preferenceData.response? preferenceData.response.preference :null;

        this.state = {
            selectedItems:[],
            checked:false,
            user:user,
            name:user.name,
            phone:user.phone,
            country:user.country?user.country:undefined,
            state:user.state?user.state:undefined,
            city:user.city?user.city:undefined,
            zip_code:user.zip_code?user.zip_code:undefined,
            address:user.address?user.address:undefined,
            deliveryMethod:userPreference?userPreference.delivery_method:undefined,
            toppings:userPreference?userPreference.toppings:undefined,
            pizzaSize:userPreference?userPreference.pizzaSize:undefined,
            selectedItems:selectedItems.length> 0?selectedItems:[],
            loading:false

        };
      
    }


    handleSubmit=async()=>{
        let  {
            name,phone,country,state,city,zip_code,address,
            pizzaSize,toppings,deliveryMethod,selectedItems
        }= this.state;

        if(!pizzaSize && !deliveryMethod && !toppings){
            ToastAndroid.show('Some fields are empty!',ToastAndroid.SHORT);
            this.setState({loading:false})
            return;
        }


        if(selectedItems.length>3 || selectedItems.length<1){
           
            ToastAndroid.show('Franchises can not be greater than 3 or less than 1', ToastAndroid.SHORT);
            this.setState({loading:false})
            return;
        }

        this.setState({loading:true})
        let user_id = this.state.user.id;

        let requestData = {
            name,
            phone,
            country,
            state,
            city,
            zip_code,
            address,
            pizzaSize,
            toppings,
            deliveryMethod,
            selectedItems,user_id
        };
        console.log('requestData',requestData)

        await fetchAPI('POST',requestData,'update-profile',this,'data')

        this.setState({loading:false})

        if(this.state.data.success==1){
            ToastAndroid.show('Profile updated successfully',ToastAndroid.SHORT);
        }



    }
      

    
     
      onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };

    render(){
        let {selectedItems}=this.state

        let {toppings,franchises,pizzaSize} = this.props.profilePreferences

        let {
            name,phone,country,state,city,zip_code,address
        }= this.state

    

        
        return(           
            
            <View style={{marginTop:20}}>
                <Row>
                    <Col>

                        <Input
                            label="Full Name"
                            value={name}
                            inputStyle={Styles.inputStyle}
                            onChangeText={(name)=>this.setState({name})}
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
                            value={phone}
                            inputStyle={Styles.inputStyle}
                            onChangeText={(phone)=>this.setState({phone})}
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
                            value={country}
                            inputStyle={Styles.inputStyle}
                            onChangeText={(country)=>this.setState({country})}
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
                            value={state}
                            inputStyle={Styles.inputStyle}
                            onChangeText={(state)=>this.setState({state})}
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
                            value={city}
                            inputStyle={Styles.inputStyle}
                            onChangeText={(city)=>this.setState({city})}
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
                            value={zip_code}
                            inputStyle={Styles.inputStyle}
                            onChangeText={(zip_code)=>this.setState({zip_code})}
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
                    value={address}
                    onChangeText={(address)=>this.setState({address})}
                    inputStyle={Styles.inputStyle}
                    leftIcon={
                        <Icon
                        name='map-marker'
                        size={20}
                        color={primaryColor}
                        />
                    }
                />

                <Row style={{marginTop:20}}>

                    <Col>
                        <View>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Pizza Size</Text>
                            
                            {pizzaSize.map((item,index)=>(
                                <CheckBox 
                                    key={index}
                                    title={item.pizzaSize}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    size={20}
                                    containerStyle={Styles.checkboxContainer}
                                    textStyle={{ fontSize: 16, color: '#2B2B2B' }}
                                    checked={this.state.pizzaSize === item.pizzaSize}
                                    onPress={() => this.setState({ pizzaSize: item.pizzaSize })}
                                    />
                            ))}
                            
                        </View>
                    </Col>


                    <Col>
                        <View>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Toppings</Text>

                            {
                                toppings.map((item,index)=>(
                                    <CheckBox 
                                    key={index}
                                    title={item.toppings}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    size={20}
                                    containerStyle={Styles.checkboxContainer}
                                    textStyle={{ fontSize: 16, color: '#2B2B2B' }}
                                    checked={this.state.toppings === item.toppings}
                                    onPress={() => this.setState({ toppings: item.toppings })}
                                    />
                                ))
                            }
                            
                            
                        </View>
                    </Col>


                    <Col>

                        <View>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Delivery Method</Text>
                            
                            <CheckBox 
                            title='Pickup'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            size={20}
                            containerStyle={Styles.checkboxContainer}
                            textStyle={{ fontSize: 16, color: '#2B2B2B' }}
                            checked={this.state.deliveryMethod === 'pickup'}
                            onPress={() => this.setState({ deliveryMethod: 'pickup' })}
                            />

                            <CheckBox 
                            title='Delivery'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            size={20}
                            containerStyle={Styles.checkboxContainer}
                            textStyle={{ fontSize: 16, color: '#2B2B2B' }}
                            checked={this.state.deliveryMethod === 'delivery'}
                            onPress={() => this.setState({ deliveryMethod: 'delivery' })}
                            />
                        </View>
                    </Col>

                   
                        
                </Row>




                <Row>
                    <Col>
                        <ScrollView style={{marginBottom:10,marginTop:10}}>
                            <MultiSelect
                                hideTags
                                items={franchises}
                                uniqueKey="id"
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
                                searchInputStyle={{ color: '#CCC', backgroundColor:'transparent' }}
                                submitButtonColor="#CCC"
                                submitButtonText="Submit"
                            />
                        </ScrollView>
                        
                    </Col>
                   
                </Row>

                <TouchableOpacity style={Styles.SubmitForm} onPress={()=>this.handleSubmit()}>
                    <View style={Styles.SubmitFormContainer}>
                        <Text style={Styles.SubmitFormText}>{this.state.loading ? 'Loading....':'Update'}</Text>
                    </View>
                </TouchableOpacity>
                

            </View>
        
        )
    }
}