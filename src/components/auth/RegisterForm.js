import React, { Component } from 'react';
import { Text, View, Image, ScrollView,TouchableOpacity,ToastAndroid,AsyncStorage } from 'react-native';

import { Button } from 'native-base';
import { Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { validation, moderateScale,fetchAPI } from '../../constants/functions';

import {Styles} from '../../assets/styles/login';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      passwordConfirmation:undefined,
      phoneNumber:undefined,
      showPassword: false,
      name:undefined,

      nameError:false,
      emailError:false,
      phoneNumberError:false,
      passError1:false,
      showPasswordConf:false
    };

    // this.focusNextInput = this.focusNextInput.bind(this);

    // this.inputs = {};
  }

  async handleRegister(){
    let {name,email,password}=this.state;
    let phone = this.state.phoneNumber;
    let password_confirmation=this.state.passwordConfirmation;
    let inputData={email,password,phone,password_confirmation,name}

    console.log('input',inputData)

    await fetchAPI('POST',inputData,'register',this,'data')
    let response=this.state.data;
    console.log('dat',response)
    if(response.success==0){
      ToastAndroid.show('Error Ocurred!!',ToastAndroid.LONG)
      return;
    }

    
    
    AsyncStorage.setItem('user', JSON.stringify(response.data), () =>
      this.props.navigation.navigate('App')
    ); 
    ToastAndroid.show(`Welcome ${response.data.name}`, ToastAndroid.LONG);
    
  }

  focusNextInput(id) {
    this.inputs[id].focus();
  }

  render() {
    const { email, password, showPassword,name,passwordConfirmation,phoneNumber,showPasswordConf } = this.state;
    const { handleCreateAccount, handleLogin } = this.props;
    console.log(this.props.navigation);

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.imageView}>
          <Image
            style={Styles.image}
            source={require('../../assets/images/restaurant.png')}
          />
        </View>

        <Input
          label='Full Name'
          placeholder='Type your name here'
          value={name}         
          inputContainerStyle={Styles.inputContainerStyle}
          inputStyle={Styles.inputStyle}
          labelStyle={Styles.textboxLabelStyle}
          leftIcon={<Icon name='user' type='simple-line-icon' size={moderateScale(20)} />}
          leftIconContainerStyle={{ opacity: 0.5 }}
          onChangeText={name => {
              if (validation(name, 'isName') !== true) {
              this.setState({ nameError: true });
              } else this.setState({ nameError: false });
              this.setState({ name });
          }}
          errorMessage={this.state.nameError ? 'Enter a valid name' : ''}
          
        
        />

        <Input
          label='Email'
          placeholder='Type your email here'
          value={email}         
          inputContainerStyle={Styles.inputContainerStyle}
          inputStyle={Styles.inputStyle}
          labelStyle={Styles.textboxLabelStyle}
          leftIcon={<Icon name='envelope' type='simple-line-icon' size={moderateScale(20)} />}
          leftIconContainerStyle={{ opacity: 0.5 }}
          onChangeText={email => {
            if (validation(email, 'isEmail') !== true) {
              this.setState({ emailError: true });
            } else this.setState({ emailError: false });
            this.setState({ email });
          }}
          errorMessage={this.state.emailError ? 'Enter a valid email' : ''}
          keyboardType='email-address'
          
        />

        <Input
          label='Password'
          placeholder='Type your password here'
          secureTextEntry={showPassword ? false : true}
          value={password}         
          inputContainerStyle={Styles.inputContainerStyle}
          inputStyle={Styles.inputStyle}
          labelStyle={Styles.textboxLabelStyle}
          leftIcon={<Icon name='key' type='simple-line-icon' size={moderateScale(20)} />}
          leftIconContainerStyle={{ opacity: 0.5 }}
          rightIcon={
            <Icon
              name={showPassword ? 'eye-off-outline' : 'eye'}
              type={showPassword ? 'material-community' : 'simple-line-icon'}
              onPress={() => this.setState({ showPassword: !showPassword })}
              size={moderateScale(20)}
            />
          }
          rightIconContainerStyle={{ paddingRight: 5, opacity: 0.5 }}
          onChangeText={value => this.setState({ password: value })}
          
        />

        <Input
          label='Password Confirmation'
          placeholder='Type your password here'
          secureTextEntry={showPassword ? false : true}
          value={passwordConfirmation}         
          inputContainerStyle={Styles.inputContainerStyle}
          inputStyle={Styles.inputStyle}
          labelStyle={Styles.textboxLabelStyle}
          leftIcon={<Icon name='key' type='simple-line-icon' size={moderateScale(20)} />}
          leftIconContainerStyle={{ opacity: 0.5 }}
          rightIcon={
            <Icon
              name={showPasswordConf ? 'eye-off-outline' : 'eye'}
              type={showPasswordConf ? 'material-community' : 'simple-line-icon'}
              onPress={() => this.setState({ showPasswordConf: !showPasswordConf })}
              size={moderateScale(20)}
            />
          }
          rightIconContainerStyle={{ paddingRight: 5, opacity: 0.5 }}
          errorMessage={
                this.state.passError1 ? "The password dosen't match!" : ''
              }
              onChangeText={passwordConfirmation => {
                if (passwordConfirmation !== password) {
                  this.setState({ passError1: true });
                } else this.setState({ passError1: false });
                this.setState({ passwordConfirmation });
              }}
          
          
        />

        <Input
          label='Phone Number'
          placeholder='Type your phone number here'
          value={phoneNumber}         
          inputContainerStyle={Styles.inputContainerStyle}
          inputStyle={Styles.inputStyle}
          labelStyle={Styles.textboxLabelStyle}
          leftIcon={<Icon name='envelope' type='simple-line-icon' size={moderateScale(20)} />}
          leftIconContainerStyle={{ opacity: 0.5 }}
          onChangeText={(phoneNumber)=>this.setState({phoneNumber})}
          errorMessage={this.state.phoneNumberError ? 'Enter a valid phone number' : ''}
          keyboardType='numeric'
          
          
        />

        <View style={{ marginTop: 30 }} />

        <View style={{marginLeft:10,marginRight:10}}>
            <Button
              style={Styles.button}
              block
              info
              onPress={()=>this.handleRegister()}
            >
                <Text style={Styles.buttonText}>Sign up</Text>
            </Button>

            <Text
            style={Styles.textFP}
            onPress={() => this.props.navigation.navigate('VerificationCode')}
            >
            Forgot Password?
            </Text>
        
            <View style={Styles.registerBottomWrapper}>             
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={Styles.bottomText}>Already have an account? Sign in</Text>
               </TouchableOpacity>     
            </View>
            
        </View>

        
      </ScrollView>
    );
  }
}
