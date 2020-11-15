import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {apiUrl} from './strings';
const { width, height } = Dimensions.get('window');

export const getUserAsync = async() => {
    const user = await AsyncStorage.getItem('user');
    return user;
};

export const fetchAPI=async(requestType,inputData,url,context,state)=>{
    
    await fetch(apiUrl+url,{
        method:requestType,
        header:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify(inputData)
    })
    .then(response=>{
        return response.json();
    })
    .then((contents)=>{
        context.setState(
            {
                [state]:contents
            }
        )
        

        return contents;
        
    })
}

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 620;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.25) =>
    size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export const logout = () => {
    
        // AsyncStorage.removeItem('user')
        AsyncStorage.removeItem('user');
   
};


export function validation(value, fieldType) {
    switch (fieldType) {
        case 'isName':
            if (value === undefined || !isNaN(value) || value.length < 3) {
                return; //alert('Please give your name.');
            } else {
                return true;
            }

        case 'isPassword':
            if (value === undefined || value.length < 4) {
                return;
                // return alert(
                //   'The password must be greater than or equal four chartacters'
                // );
            } else return true;

        case 'isPhone':
            var phone = new RegExp(/^\d{10}$/);
            if (isNaN(value)) {
                return; //alert('Please give valid phone number');
            } else if (value.match(phone)) {
                return true;
            } else return; //alert('Please give valid phone number');

        case 'isEmail':
            var mailformat = new RegExp(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/
            );
            if (value === undefined || value.length <= 0) {
                return; //alert('Enter a valid email address');
            } else if (value.match(mailformat)) {
                return true;
            } else {
                return; //alert('Enter a valid email address');
            }

        default:
            break;
    }
}