import React, { Component } from 'react';
import { Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';

import { Button } from 'native-base';
import { Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { validation, moderateScale } from '../../constants/functions';

import {Styles} from '../../assets/styles/login';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      passwordConfirmation:undefined,
      phoneNumber:undefined,
      showPassword: false
    };

    this.focusNextInput = this.focusNextInput.bind(this);

    this.inputs = {};
  }

  focusNextInput(id) {
    this.inputs[id].focus();
  }

  render() {
    const { email, password, showPassword } = this.state;
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
          onSubmitEditing={() => handleLogin(email, password)}
          returnKeyType='done'
          blurOnSubmit
          ref={input => {
            this.inputs['two'] = input;
          }}
        />

        <Input
          label='Password Confirmation'
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
          onChangeText={value => this.setState({ passwordConfirmation: value })}
          onSubmitEditing={() => handleLogin(email, password)}
          returnKeyType='done'
          blurOnSubmit
          ref={input => {
            this.inputs['two'] = input;
          }}
        />

        <Input
          label='Phone Number'
          placeholder='Type your phone number here'
          value={email}         
          inputContainerStyle={Styles.inputContainerStyle}
          inputStyle={Styles.inputStyle}
          labelStyle={Styles.textboxLabelStyle}
          leftIcon={<Icon name='envelope' type='simple-line-icon' size={moderateScale(20)} />}
          leftIconContainerStyle={{ opacity: 0.5 }}
          onChangeText={(phoneNumber)=>this.setState({phoneNumber})}
          errorMessage={this.state.phoneNumberError ? 'Enter a valid phone number' : ''}
          keyboardType='numeric'
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.focusNextInput('two');
          }}
          returnKeyType='next'
          ref={input => {
            this.inputs['one'] = input;
          }}
        />

        <View style={{ marginTop: 30 }} />

        <View style={{marginLeft:10,marginRight:10}}>
            <Button
              style={Styles.button}
              block
              info
              onPress={()=>this.props.handleLogin(email, password)}
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
