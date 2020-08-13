import { Dimensions, StyleSheet } from 'react-native';

import {primaryColor,primaryWhite, primaryColorRed} from '../../constants/styles';
import { verticalScale, moderateScale } from '../../constants/functions';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    Cover: {
        flex: 1, 
        backgroundColor: primaryWhite, 
    },
    Container:{
        marginLeft:10,
    },
    textboxContainer: {
        paddingTop: 10,
        paddingLeft: 0,
        paddingRight: 0
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 2,
        height: verticalScale(40),
        backgroundColor: 'white'
    },
    inputStyle: {
        paddingLeft: 15,
        fontSize: moderateScale(17),
        textAlignVertical: 'center'
    },
    textboxLabelStyle: {
        paddingLeft: 15,
        color: '#2B2B2B',
        fontSize: moderateScale(18),
        paddingBottom: 8
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    imgBackground: {
        width,
        height,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        opacity: 1
    },
    image: {
        width: moderateScale(180),
        height: verticalScale(120),
        resizeMode: 'contain'
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(50)
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    button: {
        height: verticalScale(40),
        borderRadius: 30,
        backgroundColor: primaryColor,
        elevation: 2
    },
    signupButton: {
        width: width - 40,
        height: verticalScale(40),
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 2,
        marginBottom: 5
    },
    textFP:{
        alignSelf:'center',
        marginTop:10
    },
    bottomWrapper: {
      
        marginTop:50,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10
    },
    bottomText: {
        
        marginTop: 10,
        color: primaryColor
    },
})