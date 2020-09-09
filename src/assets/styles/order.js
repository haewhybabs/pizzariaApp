import { Dimensions, StyleSheet } from 'react-native';

import {primaryColor,primaryWhite, primaryColorRed,primaryBlack} from '../../constants/styles';
import { verticalScale, moderateScale } from '../../constants/functions';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    Cover: {
        marginTop:20,
        marginLeft:10,
        marginRight:10
    },
    TextCover:{
        marginTop:60,
        marginLeft:10,
        marginRight:10
    },
    TextItem:{
        lineHeight:25,
        textAlign:'justify'

    },
    ImageCover:{
        marginLeft:20
       
    },
    TextHeader:{
        paddingTop:10,
        fontWeight:'bold',
        marginLeft:40,
        fontSize:23
    },
    TabCover:{
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 2,
        height:60,
        marginTop:20
    },
    TabContainer:{
        flexDirection:'row',
        height:'100%',
        marginLeft:3,
        marginRight:3,
        alignItems:'center'
    },
    LineSeparator: {
        borderStyle: 'solid',
        height: '100%',
        borderLeftWidth: 2,
        marginLeft: 10
    },
    TabText:{
        fontWeight:'bold'
    },
    CouponMainHeader:{
        marginTop:20,
        marginLeft:10,
        fontWeight:'bold',
        fontSize:22
    },
    CouponHeader:{
        fontWeight:'bold',
        fontSize:18
    },
    MainCouponText:{
        lineHeight:20
    },
    CouponButton: {
        borderColor: primaryColor,
        borderStyle: 'solid',
        backgroundColor:primaryColor,
        borderWidth: 2,
        width: 190,
        height: 40,
        marginTop: 10
    },
    CouponButtonText: {
        fontSize: 15,
        justifyContent: 'center',
        color: '#fff',
        alignSelf: 'center',
        marginTop: 5
    },

})