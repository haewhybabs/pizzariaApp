import React, { Component } from 'react';
import { Text, View, Image, ScrollView,TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';

import { Button } from 'native-base';
import { Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { validation, moderateScale,fetchAPI } from '../../constants/functions';
import { apiUrl } from '../../constants/strings';
import SpinView from '../common/Spinner';
import {Styles} from '../../assets/styles/login';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      showPassword: false,
      data:undefined
    };

    this.focusNextInput = this.focusNextInput.bind(this);

    this.inputs = {};
  }

  async handleLogin(){
    let {email,password}=this.state;
    let inputData={email,password}

    await fetchAPI('POST',inputData,'login',this)
    let data=this.state.data;
    if(data.success==0){
      ToastAndroid.show('Invalid Email or Password',ToastAndroid.LONG)
      return;
    }

    
    

    AsyncStorage.setItem('user', JSON.stringify(data.response), () =>
      this.props.navigation.navigate('App')
    );
    ToastAndroid.show(`Welcome ${data.response.user.name}`, ToastAndroid.LONG);
    
  }

  focusNextInput(id) {
    this.inputs[id].focus();
  }

  render() {
    const { email, password, showPassword } = this.state;
    const { handleCreateAccount, handleLogin } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.imageView}>
          <Image
            style={Styles.image}
            source={require('../../assets/images/restaurant.png')}
          />
        </View>

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
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.focusNextInput('two');
          }}
          returnKeyType='next'
          ref={input => {
            this.inputs['one'] = input;
          }}
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
          
          returnKeyType='done'
          blurOnSubmit
          ref={input => {
            this.inputs['two'] = input;
          }}
        />

        <View style={{ marginTop: 30 }} />

        <View style={{marginLeft:10,marginRight:10}}>
            <Button
              style={Styles.button}
              block
              info
              onPress={()=>this.handleLogin()}
            >
                <Text style={Styles.buttonText}>Log In</Text>
            </Button>

            <Text
            style={Styles.textFP}
            onPress={() => this.props.navigation.navigate('VerificationCode')}
            >
            Forgot Password?
            </Text>
        
            <View style={Styles.bottomWrapper}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                <Text style={Styles.bottomText}>You dont have an account? Sign up</Text>
               </TouchableOpacity>     
                    
                
            </View>
            
        </View>

        
      </ScrollView>
    );
  }
}
