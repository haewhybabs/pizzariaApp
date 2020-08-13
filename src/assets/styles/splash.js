import { Dimensions, StyleSheet } from 'react-native';
import {primaryColor,primaryBlack} from '../../constants/styles';

export const Styles = StyleSheet.create({
    Cover: {
        flex: 1, 
        backgroundColor: primaryBlack, 
    },
    Container:{
        marginLeft:10,
    },
    Header:{
        marginTop:40
    },
    HeaderText:{
        fontSize:30,
        color:'#fff',
        marginTop:7,
        fontWeight:'bold',
        letterSpacing:3,
    },
    SubHeaderText:{
        color:primaryColor,
        fontSize:17, 
        marginTop:10   
    },
    SubHeaderTextContainer:{
        marginTop:30
    },
    ImageCover:{
        alignItems:'center',
        marginTop:20
    },
    SplashImage:{
        width:320,
        height:290
    }
})