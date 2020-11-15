import { Dimensions, StyleSheet } from 'react-native';

import {primaryColor,primaryWhite, primaryColorRed,primaryBlack} from '../../constants/styles';
import { verticalScale, moderateScale } from '../../constants/functions';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    Cover: {
        flex: 1,
        marginLeft:10,
        marginRight:10
    },
    HeaderContainer:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity:0.8,
        shadowRadius: 2,  
        elevation: 5,
        width:250,
        height:200,
        alignSelf:'center',
        backgroundColor:'#fff',
        marginTop:20,
        alignItems:'center'

    },
    MainHeaderText:{
        paddingTop:50,
        fontSize:20,
        fontWeight:'bold',
    },
    SubHeaderText:{
        paddingTop:10,
        fontSize:14,
        color:'#404040'
    },
    ThumbNail:{
        width:80, 
        height:80,
        borderRadius:80/2,
        marginBottom:-50,
        marginTop:20
    },
    ForkCover:{
        borderRadius: 5,
        borderColor: primaryBlack,
        borderStyle: 'solid',
        borderWidth: 2,
        width:40,
        height: 40,
        alignSelf:'center',
        marginTop:20,
        justifyContent:'center'
    },
    ContentHeader:{
        fontSize:15,
        marginTop:10,
        alignSelf:'center',
        fontWeight:'bold'

    },
    inputStyle:{
        fontSize:14,
        
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0
    },

    SubmitForm:{
        borderRadius: 5,
        borderColor: primaryColor,
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor:primaryColor,
        width: '80%',
        height: 50,
        marginTop: 10,
        alignSelf:'center',
        marginTop:30,
        marginBottom:20
    },
    SubmitFormContainer:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    SubmitFormText:{
        fontSize:16,
        color:'#fff',
        fontWeight:'bold'
    }

});